import React from 'react';
import './Error404.css'; 
import Error404Image from '../../assets/images/Error404.png';

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-text">
        <h1>Error 404</h1>
        <p>We are sorry for the inconvenience, the page you are trying to access does not exist.</p>
      </div>
      <div className="error-image">
        <img 
          src={Error404Image}
          alt="404 Error" 
        />
      </div>
    </div>
  );
};

export default Error404;