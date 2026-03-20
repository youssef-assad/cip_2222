// CustomAlert.js
import React, { useState, useEffect } from 'react';

const CustomAlert = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 3000); // Hide after 3 seconds
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className={`alert-danger ${visible ? 'show-danger' : ''}`}>
      <p>ALERT: You are not allowed to copy content or view source</p>
    </div>
  );
};

export default CustomAlert;
