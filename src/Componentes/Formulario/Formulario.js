import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Form, Row, Col, Container, Spinner } from 'react-bootstrap';

function Formulario() {
  const { currencie } = useContext(AppContext);
  return (
    <section>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label>Valor:</Form.Label>
              <Form.Control placeholder="Valor" type="number"/>
            </Col>
            <Col>
              <Form.Label>Descrição:</Form.Label>
              <Form.Control placeholder="Descrição" />
            </Col>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Moeda:</Form.Label>
                <Form.Select defaultValue="Choose...">
                  {currencie ? (
                    currencie.map((value, index) =>(
                      <option key={ index }>{value}</option>
                  ))
                  ): <Spinner animation="border" />}
                </Form.Select>
              </Form.Group>
          </Row>
        </Form>
      </Container>
    </section>
  )
}

export default Formulario;
