import React from 'react';
import './GoogleMap.css'; // Add this line to include the CSS for the map

function GoogleMap() {
  return (
    <div className='map-area'>
      <div className="maps">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d355.614223693519!2d-7.870830579811334!3d33.465286418218454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda88196ddc4f7c9%3A0x6fa83979100d933c!2sChaudro%20industrie%20plast!5e1!3m2!1sfr!2sma!4v1774103135286!5m2!1sfr!2sma" 
          width="800"
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="google-map"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleMap;
