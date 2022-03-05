import React from 'react';
import AppProvider from './Context/AppProvider';
import Rotas from './Rotas/Rotas';
import './App.css';

function App() {
  return (
   <AppProvider>
     <Rotas />
   </AppProvider>
  );
}

export default App;
