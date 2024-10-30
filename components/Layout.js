import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  
const menuItems = [
    { path: '/', label: 'Revenue vs Labor' },
    { path: '/service', label: 'Frenchie Thursday 24th Oct - FOH Staff Analysis' },
    { path: '/service-friday', label: 'Frenchie Friday 25th Oct - FOH Staff Analysis' },
    { path: '/service-saturday', label: 'Frenchie Saturday 26th Oct - FOH Staff Analysis' }
  ];
  
  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Sidebar */}
      <div style={{ 
        width: '250px', 
        backgroundColor: '#1a1a1a', 
        padding: '20px',
        color: 'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}>
        <h2 style={{ marginBottom: '20px', color: 'white', fontWeight: '500' }}>Dashboard</h2>
        <nav>
          {menuItems.map((item) => (
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
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div style={{ 
        flex: 1, 
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
