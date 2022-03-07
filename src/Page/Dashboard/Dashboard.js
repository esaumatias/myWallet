import React, {useContext} from 'react';
import AppContext from '../../Context/AppContext';
import { Card, Container } from 'react-bootstrap';
import GraficoPizza from '../../Componentes/GraficoPizza/GraficoPizza';


function Dashboard() {
  const { sumConverter } = useContext(AppContext);
  return (
    <Container>
      <h1>Dashboard</h1>
      <Card
        bg='danger'
        style={{ width: '18rem' }}
        className="mb-2"
        text='white'
      >
        <Card.Header>Despesas</Card.Header>
        <Card.Body>
          <Card.Title>{sumConverter.toFixed(2)}</Card.Title>
          <Card.Text>
            Atualizado com base nas entradas das despesas!
          </Card.Text>
        </Card.Body>
      </Card>
      <GraficoPizza />
    </Container>
  )
}

export default Dashboard;
