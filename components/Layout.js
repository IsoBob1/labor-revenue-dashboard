import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  const menuItems = [
    { path: '', label: 'Frenchie', type: 'header' },
    { path: '/', label: 'Revenue vs Labor', indented: true },
    { path: '/service', label: 'Thursday 24th Oct - FOH Staff Analysis', indented: true },
    { path: '/service-friday', label: 'Friday 25th Oct - FOH Staff Analysis', indented: true },
    { path: '/service-saturday', label: 'Saturday 26th Oct - FOH Staff Analysis', indented: true },
    { path: '/service-thursday-31', label: 'Thursday 31st Oct - FOH Staff Analysis', indented: true },
    
    { path: '', label: 'Alfies', type: 'header' },
    { path: '/alfies', label: 'Revenue vs Labor', indented: true },
    { path: '/alfies-thursday', label: 'Thursday 24th Oct - FOH Staff Analysis', indented: true },
    { path: '/alfies-friday', label: 'Friday 25th Oct - FOH Staff Analysis', indented: true },
    { path: '/alfies-saturday', label: 'Saturday 26th Oct - FOH Staff Analysis', indented: true }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{ 
        width: '250px', 
        backgroundColor: '#1a1a1a', 
        padding: '20px',
        color: 'white'
      }}>
        <h2 style={{ marginBottom: '20px', color: 'white' }}>Dashboard</h2>
        <nav>
          {menuItems.map((item) => (
            item.type === 'header' ? (
              <div 
                key={item.label} 
                style={{ 
                  padding: '10px 0',
                  color: '#666',
                  fontWeight: 'bold',
                  fontSize: '0.9em',
                  textTransform: 'uppercase',
                  marginTop: '20px'
                }}
              >
                {item.label}
              </div>
            ) : (
              <Link 
                href={item.path} 
                key={item.path}
                style={{
                  display: 'block',
                  padding: '10px',
                  marginBottom: '5px',
                  backgroundColor: router.pathname === item.path ? '#333' : 'transparent',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  marginLeft: item.indented ? '10px' : '0px',
                  fontSize: '0.9em'
                }}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
