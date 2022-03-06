import React from 'react';
import AppProvider from './Context/AppProvider';
import Rotas from './Rotas/Rotas';
import './App.css';
import Sidebar from './Componentes/SideBar/SideBar';

function App() {
  return (
   <AppProvider>
     <div className="conatainerAll">
      <Sidebar />
      <Rotas />
     </div>
   </AppProvider>
  );
}

export default App;
