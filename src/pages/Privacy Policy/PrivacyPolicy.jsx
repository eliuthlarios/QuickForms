import React from 'react';
import { Box, Typography } from '@mui/material';
import FooterSimple from '../../components/Footer/SimpleFooter.jsx';
import './PrivacyPolicy.css';


const PrivacyPolicy = () => {
  return (
    <Box className="privacyPolicy-page">

      <Typography variant="h4" className="privacyPolicy-title">
        Privacy Policy
      </Typography>

      <Box className="privacyPolicy-content">

        <Box className="privacyPolicy-info-box">

          <Typography className="privacyPolicy-info-title">
          1. Information We Collect
          </Typography>
          <Typography className="privacyPolicy-info-text">
          When you use QuickForms, we may collect the following types of information:
          Personal Information: Name, email, and other data provided when creating an account.
          Form Data: Responses and data entered into forms created by users.
          Browsing Data: IP address, browser type, access time, and pages visited.
          </Typography>

          <Typography className="privacyPolicy-info-title">
          2. How We Use Your Information
          </Typography>
          <Typography className="privacyPolicy-info-text">
          We use your information to:
          Personalize your experience on the platform.
          Ensure data security and prevent fraudulent activities.
          </Typography>

          <Typography className="privacyPolicy-info-title">
          3. Data Sharing
          </Typography>
          <Typography className="privacyPolicy-info-text">
          QuickForms does not sell or share your personal data with third parties, except in the following cases:
          When necessary to comply with the law or respond to legal requests.
          With service providers that help us operate our platform (for example, cloud storage services). These providers are required to protect your data.
          </Typography>

          <Typography className="privacyPolicy-info-title">
          4. Information Security
          </Typography>
          <Typography className="privacyPolicy-info-text">
          We are committed to protecting your information through technical, administrative and physical measures, such as:
          Strong passwords and two-factor authentication (where available).
          Constant monitoring of potential security threats.
          </Typography>

        </Box>
      </Box>
      
      <FooterSimple />
    </Box>
  );
};

export default PrivacyPolicy;
