import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  
  const menuItems = [
    { path: '/', label: 'Revenue vs Labor' },
    { path: '/covers', label: 'Covers Analysis' }
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
                borderRadius: '4px'
              }}
            >
              {item.label}
            </Link>
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
