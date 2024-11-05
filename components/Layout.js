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

  // Common font style to be used throughout
  const baseFont = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  };

  // Common text styles
  const textStyles = {
    ...baseFont,
    fontSize: '14px',
    fontWeight: '400'
  };

  // Header text styles
  const headerStyles = {
    ...baseFont,
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
  };

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
      comparisons: [
        { path: '/frenchie-thursday-comparison', label: 'Thursday Comparison' }
      ],
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
    <div style={{ ...baseFont, display: 'flex', minHeight: '100vh' }}>
      <div style={{ 
        width: '250px', 
        backgroundColor: '#1a1a1a', 
        padding: '20px',
        color: 'white',
        ...baseFont
      }}>
        <h2 style={{ 
          ...headerStyles, 
          marginBottom: '20px', 
          color: 'white',
          fontSize: '16px'
        }}>
          Dashboard
        </h2>
        <nav>
          {Object.entries(menuStructure).map(([key, venue]) => (
            <div key={key} style={textStyles}>
              {/* Venue Header */}
              <div style={{ 
                padding: '10px 0',
                color: '#666',
                ...headerStyles,
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
                  ...textStyles
                }}
              >
                {venue.mainLink.label}
              </Link>

              {/* Comparisons */}
              {venue.comparisons && venue.comparisons.map((comparison) => (
                <Link 
                  key={comparison.path}
                  href={comparison.path}
                  style={{
                    display: 'block',
                    padding: '10px',
                    marginBottom: '5px',
                    backgroundColor: router.pathname === comparison.path ? '#333' : 'transparent',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    marginLeft: '10px',
                    ...textStyles
                  }}
                >
                  {comparison.label}
                </Link>
              ))}

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
                      ...textStyles
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
                            ...textStyles
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

      <div style={{ flex: 1, padding: '20px', ...baseFont }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
