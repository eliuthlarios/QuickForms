import React from 'react';
import { Box, Typography, Button} from '@mui/material';
import './Home.css';
import coverImage from "../../assets/images/MainPageImage.png"; 
import AuthForm from '../../components/AuthForm/AuthForm.jsx'; 
import Footer from '../../components/Footer/Footer.jsx'; 
import { scrollToTop } from '../../utils/scrollUtils.js'; 
import Features from '../../components/HomeFeatures/Features.jsx'; 
import { featuresData } from '../../utils/featuresData.js'; 
import CustomDivider from '../../components/CustomDivider.jsx';


const Home = () => {
  return (
    <Box className="home-container">
      <Box className="home-content">
    
        <Box className="home-info">
          <img
            src={coverImage}
            alt="QuickForms Illustration"
            className="home-image"
          />
        </Box>

        <Box className="home-form">
          <Typography variant="h4" component="div" className="home-title">
            <span className="first-line">Create forms</span>
            <span>quickly and easily</span>
          </Typography>
          <AuthForm />
        </Box>
      </Box>

      <CustomDivider />

      <Features features={featuresData} />

      <CustomDivider />

      <Box className="call-to-action">
        <Typography variant="h3" component="div" className="cta-text">
          Get ready to create your form with the easiest and fastest way possible
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="cta-button"
          onClick={scrollToTop}
        >
          Try QuickForms
        </Button>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;








