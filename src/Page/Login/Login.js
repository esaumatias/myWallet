import React, {useContext} from 'react';
import AppContext from '../../Context/AppContext';
import { Form, Button } from 'react-bootstrap';
import './Login.css';


function Home() {
  const { setIsLooading, setUserName } = useContext(AppContext);
  return (
    <div className="containerLogin">
      <div className="containerLogo">
        <img src="https://img.icons8.com/doodle/96/000000/wallet--v1.png" alt="My Wallet"/>
        <h1>My Wallet</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="email" placeholder="Enter usuario" minlength="5" isRequired onChange={({target}) => setUserName(target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" minlength="5" isRequired/>
        </Form.Group>
        <div className="btnLogin">
          <Button variant="primary" type="submit" onClick={() => setIsLooading(true)}>
            Entrar
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Home;
