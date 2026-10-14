import { AppBar, Tabs, Tab, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavController } from "../../controllers/nav.controller";

import "./Nav.css"

function Nav({formID}) {
  const { location, handleTabChange, handleBackClick, checkFormSaved, generateLink } = useNavController();
  
  const handleSendLink = async () => {
    try {
      const isSaved = await checkFormSaved(formId);

      if (isSaved) {
        const link = generateLink(formId);
        alert(`Copia el link para compartir: ${link}`);
      } else {
        alert('El formulario no está guardado. Por favor, guárdalo primero.');
      }
    } catch (error) {
      console.error(error.message);
      alert('Error al generar el link.');
    }
  };

  return (
    <AppBar position="static" className="nav-container">
      {/* Botón de regresar */}
      <div className="nav-back-button" onClick={handleBackClick}>
        <ArrowBackIcon />
      </div>
      {/* Pestañas de navegación */}
      <Tabs
        className="nav-tabs"
        centered
        value={
          location.pathname === "/form"
            ? 0
            : location.pathname === "/results"
            ? 1
            : false
        }
        onChange={handleTabChange}
      >
        <Tab label="Questions" className="nav-tab" />
        <Tab label="Answers" className="nav-tab" />
      </Tabs>
      {/* Botón adicional */}
      <Button variant="contained" className="nav-send-button" onClick={handleSendLink}>
        Send Link
      </Button>
    </AppBar>
  );
}

export default Nav;
