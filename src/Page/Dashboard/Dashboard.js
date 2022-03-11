import React, {useContext} from 'react';
import AppContext from '../../Context/AppContext';
import { Card, Container, CardGroup } from 'react-bootstrap';
import CardGroupTag from '../../Componentes/CardGroupTag/CardGroupTag';
import GraficoPizza from '../../Componentes/GraficoPizza/GraficoPizza';
import GraficoMetodo from  '../../Componentes/GraficoMetodo/GraficoMetodo';


function Dashboard() {
  const {sumTags, metodoPercentual } = useContext(AppContext);
  const {Dinheiro, Débito, Crédito} = metodoPercentual;
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
          <Card.Body style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Card.Title>
              R$ {Object.values(sumTags).reduce((acc, curr) => acc + curr).toFixed(2)}
            </Card.Title>
            
          </Card.Body>
          <Card.Footer>
            Atualizado com base nas despesas!
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>Gastos por Métodos</Card.Header>
          <GraficoMetodo />
        </Card>
      </CardGroup>

      <CardGroup>
      <Card
        bg='primary'
        style={{ width: '18rem' }}
        className="mb-2"
        text='white'
      >
        <Card.Body>
          <Card.Header>Dinheiro</Card.Header>
          <Card.Text>{`Total de pagamentos: ${(Dinheiro).toFixed(0)}`}</Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg='success'
        style={{ width: '18rem' }}
        className="mb-2"
        text='white'
      >
        <Card.Body>
          <Card.Header>Débito</Card.Header>
          <Card.Text>{`Total de pagamentos: ${(Débito).toFixed(0)}`}</Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg='info'
        style={{ width: '18rem' }}
        className="mb-2"
        text='white'
      >
        <Card.Body>
          <Card.Header>Crédito</Card.Header>
          <Card.Text>{`Total de pagamentos: ${(Crédito).toFixed(0)}`}</Card.Text>
        </Card.Body>
      </Card>

      </CardGroup>

      <CardGroup>
        <Card>
          <Card.Header>Gastos por Tags</Card.Header>
          <GraficoPizza />
          <Card.Text>
              Atualizado com base nas despesas individuais!
            </Card.Text>
        </Card>
        <CardGroupTag />
      </CardGroup>
    </Container>
  )
}

export default Dashboard;
