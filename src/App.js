import React, {useContext} from 'react';
import AppContext from './Context/AppContext';
import Login from './Page/Login/Login';
import './App.css';
import Sidebar from './Componentes/SideBar/SideBar';

function App() {
  const { isLooading } = useContext(AppContext);
  return (
    <>
      {isLooading ?  <Sidebar /> :  <Login />} 
    </>
  );
}

export default App;
