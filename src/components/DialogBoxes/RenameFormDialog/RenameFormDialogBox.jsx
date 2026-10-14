import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import PropTypes from 'prop-types';
import './RenameFormDialogBox.css';

const RenameDialogBox = ({ 
  open, 
  onClose, 
  selectedForm, 
  handleRename 
}) => {
  const [newName, setNewName] = useState('');

  const handleConfirm = () => {
    if (newName.trim()) {
      handleRename(selectedForm, newName);
      setNewName('');
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: "custom-dialog" }} 
    >
      <DialogTitle classes={{ root: "custom-dialog-title" }}>
        Rename Form
      </DialogTitle>
      <DialogContent classes={{ root: "custom-dialog-content" }}>
        <TextField
          autoFocus
          margin="dense"
          label="New Form Name"
          type="text"
          fullWidth
          variant="standard"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="custom-dialog-input" 
        />
      </DialogContent>
      <DialogActions classes={{ root: "custom-dialog-actions" }}>
        <Button
          onClick={onClose}
          variant="contained"
          color="secondary"
          className="custom-dialog-button" 
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          variant="contained"
          color="primary"
          className="custom-dialog-button" 
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

RenameDialogBox.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedForm: PropTypes.object.isRequired,
  handleRename: PropTypes.func.isRequired,
};

export default RenameDialogBox;


