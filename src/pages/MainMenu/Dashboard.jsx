import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Grid2,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

import useDashboardActions from '../../hooks/MainMenuHooks/useDashboardActions.js';
import useFilterForms from '../../hooks/MainMenuHooks/useFilterForms.js';
import useDrawer from '../../hooks/MainMenuHooks/useDrawer.js';
import useLogout from '../../hooks/MainMenuHooks/useLogout.js';
import UserFormsDetailsDrawer from '../../components/Tables/UserFormsDetailsDrawer.jsx';
import LogoutDialogBox from '../../components/DialogBoxes/LogoutDialogBox/LogoutDialogBox.jsx';
import ManageFormMenu from '../../components/ManageFormMenu/ManageFormMenu.jsx';
import RenameDialogBox from '../../components/DialogBoxes/RenameFormDialog/RenameFormDialogBox.jsx';
import {toast} from 'react-hot-toast';

import { handleCardClick, handleMenuClose, handleMenuOpen } from '../../utils/DashboardUtils/dashboardHandlers.js';
import './Dashboard.css';
import image from '../../assets/images/ContactPageImge.png';

// Simulación de datos de formularios (Mientras se realiza el backend)
const initialForms = [
  { id: 1, name: 'Student Form', createdAt: '2024-11-24', updatedAt: '2024-12-25', thumbnail: image },
  { id: 2, name: 'Math exam', createdAt: '2024-11-24', updatedAt: '2024-12-25', thumbnail: image },
  { id: 3, name: 'FeedBack survey', createdAt: '2024-11-24', updatedAt: '2024-12-25', thumbnail: image },
  { id: 4, name: 'Dinner attendance', createdAt: '2024-11-24', updatedAt: '2024-12-25', thumbnail: image },
];

const Dashboard = () => {
  const { anchorEl, selectedForm, setAnchorEl, setSelectedForm } = useDashboardActions();
  const { isDrawerOpen, toggleDrawer } = useDrawer();
  const { handleLogout } = useLogout();
  const navigate = useNavigate();

  const [forms, setForms] = useState(initialForms); // Lista de formularios
  const [filteredForms, searchTerm, handleSearchChange] = useFilterForms(forms);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [renameDialogOpen, setRenameDialogOpen] = useState(false);

  const handleRename = (form, newName) => {
    if (!form) {
      toast.error("Form is undefined");
      return;
    }
    toast.success(`Renaming form: ${form.id} to ${newName}`);
    //Aqui se realizara la solicitud al backend para actualizar el nombre del formulario.
    
    // Simulación de cambio de nombre:
    setForms((prevForms) => prevForms.map((f) => (f.id === form.id ? { ...f, name: newName } : f)));
    handleMenuClose(setAnchorEl, setSelectedForm);
  };

  const handleDeleteForm = (formId) => {
    //Realizar la solicitud al backend para eliminar el formulario.

    // Simulación de eliminación:
    setForms((prevForms) => prevForms.filter((form) => form.id !== formId));
    toast.success(`Form ${formId} deleted.`);
    handleMenuClose(setAnchorEl, setSelectedForm);
  };

  const openRenameDialog = (form) => {
    setSelectedForm(form);
    setRenameDialogOpen(true);
  };

  return (
    <Box className="dashboard-container">
      <Typography variant="h4" className="dashboard-title">
        My Forms
      </Typography>

      <Box className="dashboard-header">
        <IconButton className="dashboard-back-button" onClick={() => setLogoutDialogOpen(true)}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <IconButton className="menu-button" onClick={toggleDrawer}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <IconButton className="add-button" onClick={() => navigate('/edit-form')}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box className="dashboard-search">
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          className="dashboard-search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className="search-icon" />
              </InputAdornment>
            ),
          }}
        />

        {filteredForms.length > 0 && (
          <Box className="search-results">
            {filteredForms.map((form) => (
              <Box
                key={form.id}
                className="search-results-item"
                onClick={() => handleCardClick(form, navigate)}
                style={{ cursor: 'pointer' }}
              >
                <Typography className="form-name" variant="body1">
                  {form.name}
                </Typography>
                <Typography className="form-date" variant="body2" color="textSecondary">
                  {form.createdAt}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Box className="dashboard-forms-container">
        <Grid2 container spacing={3}>
          {forms.map((form) => (
            <Grid2 xs={12} sm={6} md={4} key={form.id}>
              <Box
                className="dashboard-card"
                onClick={() => handleCardClick(form, navigate)}
                style={{ cursor: 'pointer' }}
              >
                <Box
                  component="img"
                  src={form.thumbnail}
                  alt={form.name}
                  className="dashboard-thumbnail"
                />
                <Box className="dashboard-menu">
                  <Typography variant="h6">{form.name}</Typography>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMenuOpen(e, form.id, setAnchorEl, setSelectedForm);
                    }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  Created: {form.createdAt}
                </Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <ManageFormMenu
        anchorEl={anchorEl}
        selectedForm={selectedForm}
        handleMenuClose={() => handleMenuClose(setAnchorEl, setSelectedForm)}
        handleDeleteForm={() => handleDeleteForm(selectedForm.id)}
        openRenameDialog={openRenameDialog}
      />

      <RenameDialogBox
        open={renameDialogOpen}
        onClose={() => setRenameDialogOpen(false)}
        selectedForm={selectedForm}
        handleRename={handleRename}
      />

      <UserFormsDetailsDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} forms={forms} />
      <LogoutDialogBox
        logoutDialogOpen={logoutDialogOpen}
        setLogoutDialogOpen={setLogoutDialogOpen}
        handleLogout={handleLogout}
      />
    </Box>
  );
};

export default Dashboard;

