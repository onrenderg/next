import React from 'react';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          
                {children}
            </div>
    );
};

export default Layout;
