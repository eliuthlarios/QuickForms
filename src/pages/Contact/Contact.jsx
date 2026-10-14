import React from 'react';
import { Box, Typography } from '@mui/material';
import FooterSimple from '../../components/Footer/SimpleFooter.jsx';
import './Contact.css';
import contactImage from '../../assets/images/ContactPageImge.png'; 

const Contact = () => {
  return (
    <Box className="contact-page">
      
      <Typography variant="h4" className="contact-title">
        Contact Us
      </Typography>

      <Box className="contact-content">
        
        <Box className="contact-info-box">
          <Typography className="contact-info-text">
            We are here to help you. If you have questions, comments, or need support, please feel free to write to us.
            You can write to us directly at any of the following emails:
          </Typography>
          <Typography className="contact-info-text">📧 00029223@uca.edu.sv</Typography>
          <Typography className="contact-info-text">📧 00106423@uca.edu.sv</Typography>
          <Typography className="contact-info-text">📧 00103923@uca.edu.sv</Typography>
          <Typography className="contact-info-text">
            📍 Address: Universidad Centroamericana Jose Simeon Cañas, San Salvador, El Salvador.
          </Typography>
        </Box>

        <Box className="contact-image-container">
          <img src={contactImage} alt="Contact Us" className="contact-image" />
        </Box>
      </Box>

      <FooterSimple />
    </Box>
  );
};

export default Contact;

