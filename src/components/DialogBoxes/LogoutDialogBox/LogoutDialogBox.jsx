import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import './LogoutDialogBox.css';

const LogoutDialogBox = ({ logoutDialogOpen, setLogoutDialogOpen, handleLogout }) => {
  return (
    <Dialog
      open={logoutDialogOpen}
      onClose={() => setLogoutDialogOpen(false)}
      className="logout-dialog"
    >
      <DialogTitle className="logout-dialog-title">DO YOU WANT TO LOG OUT?</DialogTitle>
      <DialogContent>
        <Typography className="logout-dialog-description" variant="body2">
          You will be redirected to the main page.
        </Typography>
      </DialogContent>
      <DialogActions className="logout-dialog-actions">
        <Button onClick={() => setLogoutDialogOpen(false)} color="primary" className="logout-dialog-button">
          No
        </Button>
        <Button onClick={handleLogout} color="secondary" autoFocus className="logout-dialog-button">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Validación de PropTypes
LogoutDialogBox.propTypes = {
  logoutDialogOpen: PropTypes.bool.isRequired,
  setLogoutDialogOpen: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default LogoutDialogBox;

