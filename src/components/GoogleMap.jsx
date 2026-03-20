import React from 'react';
import './GoogleMap.css'; // Add this line to include the CSS for the map

function GoogleMap() {
  return (
    <div className='map-area'>
      <div className="maps">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3324.87061248804!2d-7.4523542!3d33.5567379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda63544b9850703%3A0xfe37e6634e59f4e1!2sCRISTAL%20INOX!5e0!3m2!1sen!2sma!4v1721410708475!5m2!1sen!2sma"
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
