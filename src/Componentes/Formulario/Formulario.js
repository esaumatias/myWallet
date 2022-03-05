import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Form, Row, Col, Container, Spinner } from 'react-bootstrap';

function Formulario() {
  const { currencie } = useContext(AppContext);
  const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

  return (
    <section>
      <Container>
        <Form>
          <Row>
           <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Valor:</Form.Label>
              <Form.Control type="number" placeholder="Valor" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Descrição:</Form.Label>
              <Form.Control type="text" placeholder="Descrição" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Moeda:</Form.Label>
              <Form.Select>
                {currencie ? (
                  currencie.map((value, index) =>(
                    <option key={ index }>{value}</option>
                ))
                ): <Spinner animation="border" />}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Método de pagamento:</Form.Label>
              <Form.Select>
                {pagamento ? (
                  pagamento.map((value, index) =>(
                    <option key={ index }>{value}</option>
                ))
                ): <Spinner animation="border" />}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Tag:</Form.Label>
              <Form.Select>
                {tag ? (
                  tag.map((value, index) =>(
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
