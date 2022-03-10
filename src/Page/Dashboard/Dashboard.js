import React, {useContext} from 'react';
import AppContext from '../../Context/AppContext';
import { Card, Container, CardGroup } from 'react-bootstrap';
import CardGroupTag from '../../Componentes/CardGroupTag/CardGroupTag';
import GraficoPizza from '../../Componentes/GraficoPizza/GraficoPizza';


function Dashboard() {
  const {sumTags } = useContext(AppContext);
  const { Alimentação, Lazer, Trabalho, Transporte, Saúde } = sumTags;

  return (
    <Container style={{height: '100vh', overflow: 'auto' }}>
      <h1>Dashboard</h1>
      <CardGroup>
        <Card
        bg='danger'
        style={{ width: '18rem' }}
        className="mb-2"
        text='white'
        >
          <Card.Header>Despesas totais:</Card.Header>
          <Card.Body>
          <Card.Title>{`R$ ${(Alimentação + Lazer + Trabalho + Transporte + Saúde).toFixed(2)}`}</Card.Title>
            <Card.Text>
              Atualizado com base nas despesas!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <Card>
        <Card.Header>Gastos por TAG</Card.Header>
        <Card.Body>
        <GraficoPizza />
          <Card.Text>
            Atualizado com base nas despesas!
          </Card.Text>
        </Card.Body>
      </Card>
      <CardGroupTag />
    </Container>
  )
}

export default Dashboard;
