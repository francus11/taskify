import React from 'react';

import './styles/global.css';

const Layout = ({ children }) => {
  return (
    <html>
      <head>
                            {/* CZCIONKI */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&display=swap" rel="stylesheet" />
        
      </head>
      <body>
        
        {children}
      </body>
    </html>
  );
}

export default Layout;