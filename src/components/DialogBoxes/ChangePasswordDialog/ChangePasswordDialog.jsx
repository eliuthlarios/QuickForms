import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import "./ChangePasswordDialog.css";

const ChangePasswordDialog = ({
  open,
  onClose,
  onSave,
  newPassword,
  setNewPassword,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: "custom-dialog" }}
    >
      <DialogTitle classes={{ root: "custom-dialog-title" }}>
        Change Password
      </DialogTitle>
      <DialogContent classes={{ root: "custom-dialog-content" }}>
        <TextField
          label="New Password"
          type="password"
          fullWidth
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
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
          onClick={onSave}
          variant="contained"
          color="primary"
          className="custom-dialog-button"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePasswordDialog;
