//Si es neseracio, este archivo sera modificado, para conectarla con el backend

import { useState } from 'react';

/**
 * Hook personalizado para filtrar formularios
 * @param {Array} forms - La lista de formularios a filtrar, por el momento es un array para simular, hasta el backend
 * @returns {[Array, Function]} - La lista de formularios filtrados y la función para actualizar el término de búsqueda
 */
const useFilterForms = (forms) => {
  const [filteredForms, setFilteredForms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);


    // Filtrar formularios en tiempo real (lista que aparece debajo de la barra de busqueda)
    if (term.trim() === '') {
      setFilteredForms([]);
    } else {
      const results = forms.filter((form) =>
        form.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredForms(results);
    }
  };

  return [filteredForms, searchTerm, handleSearchChange];
};

export default useFilterForms;
