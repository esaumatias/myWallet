import React from 'react';
import AppProvider from './Context/AppProvider';
import './App.css';
import Sidebar from './Componentes/SideBar/SideBar';

function App() {
  return (
   <AppProvider>
      <Sidebar />
   </AppProvider>
  );
}

export default App;
