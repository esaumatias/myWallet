import React, {useContext} from 'react';
import AppContext from '../../Context/AppContext';
import { Form, Container, Button } from 'react-bootstrap';


function Home() {
  const { setIsLooading } = useContext(AppContext);
  return (
    <Container style={{height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>My Wallet</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Home;
