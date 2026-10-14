import React from 'react';
import PropTypes from 'prop-types'; 
import './Features.css';

const Features = ({ features }) => {
  return (
    <>
      {features.map((feature, index) => (
        <div
          key={index}
          className={`features-container ${feature.reverse ? 'reverse-feature' : ''}`}
        >
          <div className="features-info">
            <img
              src={feature.image}
              alt={`Feature ${index + 1} Illustration`}
              className="feature-image"
            />
          </div>
          <div className="features-text">
            <h5 className="feature-title">{feature.title}</h5>
            <p className="feature-description">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired, 
      description: PropTypes.string.isRequired, 
      reverse: PropTypes.bool, 
    })
  ).isRequired,
};

export default Features;


