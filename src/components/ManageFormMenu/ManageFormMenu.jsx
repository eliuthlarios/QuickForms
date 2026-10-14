import React from 'react';
import { Menu, MenuItem, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ManageFormMenu = ({ 
  anchorEl, 
  selectedForm, 
  handleMenuClose, 
  handleDeleteForm, 
  openRenameDialog 
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleDeleteForm(selectedForm)}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        Delete
      </MenuItem>
      <MenuItem onClick={() => openRenameDialog(selectedForm)}>
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        Rename
      </MenuItem>
    </Menu>
  );
};

export default ManageFormMenu;

