import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import "./DeleteUserDialog.css";

const DeleteUserDialog = ({
  open,
  onClose,
  onDelete,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: "custom-dialog" }}
    >
      <DialogTitle classes={{ root: "custom-dialog-title" }}>
        Are you sure you want to delete this user?
      </DialogTitle>
      <DialogActions classes={{ root: "custom-dialog-actions" }}>
        <Button
          onClick={onClose}
          variant="contained"
          color="secondary"
          className="custom-dialog-button"
        >
          No
        </Button>
        <Button
          onClick={onDelete}
          variant="contained"
          color="primary"
          className="custom-dialog-button"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserDialog;
