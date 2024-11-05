import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState({
    'frenchie-oct24': false,
    'frenchie-oct31': false,
    'alfies-oct24': false
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const menuStructure = {
    frenchie: {
      label: 'Frenchie',
      mainLink: { path: '/', label: 'Revenue vs Labor' },
      weeks: {
        'frenchie-oct24': {
          label: 'Week of Oct 24-26',
          items: [
            { path: '/service', label: 'Thursday 24th Oct' },
            { path: '/service-friday', label: 'Friday 25th Oct' },
            { path: '/service-saturday', label: 'Saturday 26th Oct' }
          ]
        },
        'frenchie-oct31': {
          label: 'Week of Oct 31-Nov 2',
          items: [
            { path: '/service-thursday-31', label: 'Thursday 31st Oct' }
          ]
        }
      }
    },
    alfies: {
      label: 'Alfies',
      mainLink: { path: '/alfies', label: 'Revenue vs Labor' },
      weeks: {
        'alfies-oct24': {
          label: 'Week of Oct 24-26',
          items: [
            { path: '/alfies-thursday', label: 'Thursday 24th Oct' },
            { path: '/alfies-friday', label: 'Friday 25th Oct' },
            { path: '/alfies-saturday', label: 'Saturday 26th Oct' }
          ]
        }
      }
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ 
        width: '250px', 
        backgroundColor: '#1a1a1a', 
        padding: '20px',
        color: 'white'
      }}>
        <h2 style={{ marginBottom: '20px', color: 'white' }}>Dashboard</h2>
        <nav>
          {Object.entries(menuStructure).map(([key, venue]) => (
            <div key={key}>
              {/* Venue Header */}
              <div style={{ 
                padding: '10px 0',
                color: '#666',
                fontWeight: 'bold',
                fontSize: '0.9em',
                textTransform: 'uppercase',
                marginTop: '20px'
              }}>
                {venue.label}
              </div>

              {/* Revenue vs Labor Link */}
              <Link 
                href={venue.mainLink.path}
                style={{
                  display: 'block',
                  padding: '10px',
                  marginBottom: '5px',
                  backgroundColor: router.pathname === venue.mainLink.path ? '#333' : 'transparent',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  marginLeft: '10px',
                  fontSize: '0.9em'
                }}
              >
                {venue.mainLink.label}
              </Link>

              {/* Weekly Sections */}
              {Object.entries(venue.weeks).map(([weekKey, week]) => (
                <div key={weekKey}>
                  <button
                    onClick={() => toggleSection(weekKey)}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '10px',
                      marginBottom: '5px',
                      backgroundColor: 'transparent',
                      color: 'white',
                      textAlign: 'left',
                      border: 'none',
                      cursor: 'pointer',
                      marginLeft: '10px',
                      fontSize: '0.9em'
                    }}
                  >
                    {expandedSections[weekKey] ? '▼' : '▶'} {week.label}
                  </button>
                  
                  {expandedSections[weekKey] && (
                    <div style={{ marginLeft: '20px' }}>
                      {week.items.map((item) => (
                        <Link 
                          key={item.path}
                          href={item.path}
                          style={{
                            display: 'block',
                            padding: '8px 10px',
                            marginBottom: '5px',
                            backgroundColor: router.pathname === item.path ? '#333' : 'transparent',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontSize: '0.85em'
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </nav>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
