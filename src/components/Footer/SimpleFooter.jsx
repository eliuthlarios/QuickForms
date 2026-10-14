import React from 'react';
import { Box, Typography } from '@mui/material';
import './SimpleFooter.css';
import { Link } from 'react-router-dom';

const FooterSimple = () => {
  return (
    <Box className="footer-simple-container">
      <Box className="footer-links">
       <Link to="/privacy-policy" className="footer-simple-link">Privacy Policy</Link>
       <Link to="/contact" className="footer-simple-link">Contact</Link>
      </Box>
      <Typography className="footer-simple-text">
        © 2024 QuickForms. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterSimple;


