//Si es neseracio, este archivo sera modificado, para conectarla con el backend

import { useState } from 'react';

const useDashboardActions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);

  return { anchorEl, selectedForm, setAnchorEl, setSelectedForm };
};

export default useDashboardActions;
