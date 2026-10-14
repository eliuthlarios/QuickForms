import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  Box,
  IconButton,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './UserFormsDetailsDrawer.css';

/**
 * Componente UserFormsDetailsDrawer.
 * Este drawer muestra detalles de los formularios del usuario, como ID, nombre, y fechas de creación y actualización.
 * Actualmente, los datos de los formularios se reciben a través de las props simuladas, 
 * pero en el futuro se espera que estos datos provengan de una base de datos conectada al backend.
 *
 * @param {boolean} isDrawerOpen - Indica si el drawer está abierto o cerrado.
 * @param {function} toggleDrawer - Función para alternar el estado del drawer.
 * @param {Array} forms - Lista de formularios con sus detalles.
 */
const UserFormsDetailsDrawer = ({ isDrawerOpen, toggleDrawer, forms }) => {
  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      variant="temporary"
      className="drawer-menu"
    >
      <Box className="drawer-content" padding={2}>
        
        <IconButton className="menu-button-active" onClick={toggleDrawer}>
          <MenuIcon fontSize="large" />
        </IconButton>

        
        <Typography variant="h6" className="drawer-title">
          Details of my forms
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Updated At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {forms.map((form) => (
                <TableRow key={form.id}>
                  <TableCell>{form.id}</TableCell>
                  <TableCell>{form.name}</TableCell>
                  <TableCell>{form.createdAt}</TableCell>
                  <TableCell>{form.updatedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Drawer>
  );
};

export default UserFormsDetailsDrawer;
