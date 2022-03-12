import React, {useContext} from 'react';
import { InputGroup, Button } from 'react-bootstrap';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Rotas from '../../Rotas/Rotas';
import AppContext from '../../Context/AppContext';

const Sidebar = () => {
  const {userName, setIsLooading} = useContext(AppContext);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333" id="sidebarContainer" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>} >
          <img src="https://img.icons8.com/doodle/96/000000/wallet--v1.png" alt="My Wallet" style={{width: "25px", marginRight: '7px'}}/>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            My Wallet
          </a>
        </CDBSidebarHeader>
        <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', flexDirection: 'column', textAlign: 'center'}}>
          <p>Seja bem vindo,</p>
          <InputGroup.Text id="basic-addon1">{`${userName}`}</InputGroup.Text>
        </InputGroup>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Despesas" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Despesas</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Button style={{marginBottom: '10px'}} onClick={() => setIsLooading(false)}>Sair</Button>
            © 2022 Esau Matias
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div className="containerAllRotas">
        <Rotas />
      </div>
    </div>
  );
};

export default Sidebar;
