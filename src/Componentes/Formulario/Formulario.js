import React, { useContext, useState } from 'react';
import AppContext from '../../Context/AppContext';
import { Form, Row, Col, Container, Spinner } from 'react-bootstrap';

function Formulario() {
  const { currencie, tableValues, setTableValues } = useContext(AppContext);
  const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  const [valor, setValor] = useState('0');
  const [descricao, setDescricao] = useState('');
  const [moeda, setMoeda] = useState('USD');
  const [metodo, setMetodo] = useState('Dinheiro');
  const [tag, setTag] = useState('Alimentação');
  const [id, setId] = useState(1);

  function setValueTable() {
    setId(id + 1);
    const tableArray = {
      valor,
      descricao,
      moeda,
      metodo,
      tag,
      id,
    };
    setTableValues([...tableValues, tableArray]);
  }

  return (
    <section>
      <Container>
        <Form>
          <Row>
           <Form.Group as={Col} controlId="formGridState" onChange={({target}) => setValor(target.value)}>
              <Form.Control type="number" placeholder="Valor" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onChange={({target}) => setDescricao(target.value)}>
              <Form.Control type="text" placeholder="Descrição" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setMoeda(target.value)}>
              <Form.Select>
                {currencie ? (
                  currencie.map((value, index) =>(
                    <option key={ index }>{value}</option>
                ))
                ): <Spinner animation="border" />}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setMetodo(target.value)}>
              <Form.Select>
                {pagamento ? (
                  pagamento.map((value, index) =>(
                    <option key={ index }>{value}</option>
                ))
                ): <Spinner animation="border" />}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setTag(target.value)}>
              <Form.Select>
                {tags ? (
                  tags.map((value, index) =>(
                    <option key={ index }>{value}</option>
                ))
                ): <Spinner animation="border" />}
              </Form.Select>
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control type="button" onClick={setValueTable} value='Enviar' />
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </section>
  )
}

export default Formulario;
