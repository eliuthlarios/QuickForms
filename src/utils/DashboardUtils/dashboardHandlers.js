// Función para abrir el menú del formulario
export const handleMenuOpen = (event, formId, setAnchorEl, setSelectedForm) => {
  setSelectedForm({ id: formId });
  setAnchorEl(event.currentTarget);
};

// Función para cerrar el menú
export const handleMenuClose = (setAnchorEl, setSelectedForm) => {
  setAnchorEl(null);
  setSelectedForm(null);
};

// Función al hacer clic en la tarjeta del formulario
export const handleCardClick = (form, navigate) => {
  navigate(`/form/${form.id}`);
};
