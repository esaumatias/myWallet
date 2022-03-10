import React, {useContext} from 'react';
import AppContext from '../../Context/AppContext';
import { Card, CardGroup } from 'react-bootstrap';


function CardGroupTag() {
  const {sumTags } = useContext(AppContext);
  const { Alimentação, Lazer, Trabalho, Transporte, Saúde } = sumTags;
  return (
    <CardGroup>
      <Card
        bg='primary'
        style={{ width: '18rem' }}
        className="mb-2"
        text='white'
      >
        <Card.Body>
          <Card.Header>Alimentação</Card.Header>
          <Card.Text>{`R$ ${(Alimentação).toFixed(2)}`}</Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg='secondary'
        style={{ width: '18rem' }}
        className="mb-2"
        text='white'
      >
        <Card.Body>
          <Card.Header>Lazer</Card.Header>
          <Card.Text>{`R$ ${(Lazer).toFixed(2)}`}</Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg='success'
        style={{ width: '18rem' }}
        className="mb-2"
        text='white'
      >
        <Card.Body>
          <Card.Header>Trabalho</Card.Header>
          <Card.Text>{`R$ ${(Trabalho).toFixed(2)}`}</Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg='warning'
        style={{ width: '18rem' }}
        className="mb-2"
        text='white'
      >
        <Card.Body>
          <Card.Header>Transporte</Card.Header>
          <Card.Text>{`R$ ${(Transporte).toFixed(2)}`}</Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg='info'
        style={{ width: '18rem' }}
        className="mb-2"
        text='white'
      >
        <Card.Body>
          <Card.Header>Saúde</Card.Header>
          <Card.Text>{`R$ ${(Saúde).toFixed(2)}`}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default CardGroupTag;
