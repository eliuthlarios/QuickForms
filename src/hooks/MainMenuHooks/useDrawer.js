//Si es neseracio, este archivo sera modificado, para conectarla con el backend


import { useState } from 'react';

const useDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };

  return { isDrawerOpen, toggleDrawer };
};

export default useDrawer;
