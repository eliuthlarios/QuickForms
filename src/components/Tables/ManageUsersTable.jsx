import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteUserDialog from "../DialogBoxes/DeleteUserDialog/DeleteUserDialog.jsx";
import ChangePasswordDialog from "../DialogBoxes/ChangePasswordDialog/ChangePasswordDialog.jsx";
import "./ManageUsersTable.css";
import DeleteIcon from '@mui/icons-material/Delete';
import VpnKeyIcon from '@mui/icons-material/VpnKey';


const UserTable = ({ users, onDeleteUser, onChangePassword }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleOpenMenu = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
    handleCloseMenu();
  };

  const handleCloseDeleteDialog = () => setOpenDeleteDialog(false);

  const handleOpenPasswordDialog = () => {
    setOpenPasswordDialog(true);
    handleCloseMenu();
  };

  const handleClosePasswordDialog = () => {
    setOpenPasswordDialog(false);
    setNewPassword("");
  };

  const handleDeleteUser = () => {
    onDeleteUser(selectedUser.id);
    setOpenDeleteDialog(false);
    setSelectedUser(null);
  };

  const handleSavePassword = () => {
    onChangePassword(selectedUser.id, newPassword);
    setOpenPasswordDialog(false);
    setNewPassword("");
    setSelectedUser(null);
  };

  return (
    <TableContainer component={Paper} className="table-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Created On</TableCell>
            <TableCell>Last Connection</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.createdOn}</TableCell>
                <TableCell>{user.lastConnection}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={(event) => handleOpenMenu(event, user)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <span>No users found</span>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

{/* Menu */}
<Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleCloseMenu}
  classes={{ paper: 'custom-menu' }}
>
  <MenuItem onClick={handleOpenDeleteDialog}>
    <DeleteIcon style={{ marginRight: '8px' }} /> Delete User
  </MenuItem>
  <MenuItem onClick={handleOpenPasswordDialog}>
    <VpnKeyIcon style={{ marginRight: '8px' }} /> Change Password
  </MenuItem>
</Menu>


      {/* Delete Dialog */}
      <DeleteUserDialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        onDelete={handleDeleteUser}
      />

      {/* Password Dialog */}
      <ChangePasswordDialog
        open={openPasswordDialog}
        onClose={handleClosePasswordDialog}
        onSave={handleSavePassword}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
      />
    </TableContainer>
  );
};

export default UserTable;





