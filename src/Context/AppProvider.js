import React, { useState, useEffect } from 'react';
import AppContext from '../Context/AppContext';

function AppProvider({ children }) {
  const [name, setName] = useState('');

  return (
    <AppContext.Provider
      value={ {
        name,
        setName,
      } }
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
