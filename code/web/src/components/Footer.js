import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#f8f9fa',
      padding: '20px 0',
      marginTop: 'auto',
      textAlign: 'center',
      borderTop: '1px solid #e7e7e7'
    }}>
      <div>
        <p>&copy; {new Date().getFullYear()} Crate DevOps. All rights reserved.</p>
        <p>Created as part of DevOps Week II Assignment</p>
      </div>
    </footer>
  );
};

export default Footer;
