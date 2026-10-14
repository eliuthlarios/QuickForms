import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment,IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UserTable from "../../components/Tables/ManageUsersTable.jsx"; // Importa el componente UserTable
import { deleteUser, renameUser } from "../../utils/AdminMenuUtils/manageUser.js"; // Importa las funciones
import useLogout from '../../hooks/MainMenuHooks/useLogout.js';
import LogoutDialogBox from '../../components/DialogBoxes/LogoutDialogBox/LogoutDialogBox.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './AdminMenu.css';

const AdminMenu = () => {
  const initialUsers = [
    { id: 1, name: "Marden Larios", createdOn: "19/11/2024 18:14", lastConnection: "19/11/2024 18:24" },
    { id: 2, name: "Guillermo Dubon", createdOn: "19/11/2024 18:14", lastConnection: "19/11/2024 18:24" },
    { id: 3, name: "Gabriel Batres", createdOn: "19/11/2024 18:14", lastConnection: "19/11/2024 18:24" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const { handleLogout } = useLogout();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId);
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleChangePassword = (userId, newPassword) => {
    renameUser(userId, newPassword);
  };

  return (
    <Box className="admin-page">
      <Box className="header">

       <IconButton className="back-button" onClick={() => setLogoutDialogOpen(true)}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>

        <Typography variant="h6" className="header-title">
          Users
        </Typography>
        <Box className="search-bar">
        <TextField
  variant="outlined"
  placeholder="Search"
  size="small"
  value={searchQuery}
  onChange={handleSearchChange}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon className="search-icon" />
      </InputAdornment>
    ),
  }}
/>
        </Box>
      </Box>

      <UserTable
        users={filteredUsers}
        onDeleteUser={handleDeleteUser}
        onChangePassword={handleChangePassword}
      />

        <LogoutDialogBox
        logoutDialogOpen={logoutDialogOpen}
        setLogoutDialogOpen={setLogoutDialogOpen}
        handleLogout={handleLogout}
      />

    </Box>
  );
};

export default AdminMenu;





