import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Form, Row, Col, Container, Spinner } from 'react-bootstrap';

function Formulario() {
  const {
    currencie,
    tableValues,
    setTableValues,
    valor,
    setValor,
    descricao,
    setDescricao,
    moeda,
    setMoeda,
    metodo,
    setMetodo,
    tag,
    setTag,
    buttonEdit,
    setButtonEdit,
    indexTable} = useContext(AppContext);
  
  const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

  function setValueTable() {
    const tableArray = {
      valor,
      descricao,
      moeda,
      metodo,
      tag,
    };
    setTableValues([...tableValues, [tableArray]]);
    setValor(0);
    setDescricao('');
    setMoeda('USD');
    setMetodo('Dinheiro');
    setTag('Alimentação');
  }

  function editTable() {
    setButtonEdit(!buttonEdit)
    const values = tableValues.slice();
    values[indexTable] = {valor, descricao, moeda, metodo, tag}
    setTableValues(values);
  }

  return (
    <section>
      <Container>
        <Form>
          <Row>
           <Form.Group as={Col} controlId="formGridState" onChange={({target}) => setValor(target.value)}>
              <Form.Control type="number" placeholder="Valor" value={buttonEdit ? valor : undefined}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onChange={({target}) => setDescricao(target.value)}>
              <Form.Control type="text" placeholder="Descrição"  value={buttonEdit ? descricao : undefined}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setMoeda(target.value)}>
              <Form.Select>
                {currencie ? (
                  currencie.map((value, index) =>(
                    <option key={ index }>{value}</option>
                ))
                ): <option><Spinner animation="border" /></option>}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setMetodo(target.value)}>
              <Form.Select>
                {pagamento.map((value, index) =>(
                  <option key={ index }>{value}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setTag(target.value)}>
              <Form.Select>
                {tags.map((value, index) =>(
                    <option key={ index }>{value}</option>
                ))}
              </Form.Select>
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridState">
              {buttonEdit ? (
                <Form.Control type="reset" onClick={editTable} value='Alterar' />
              ): (
                <Form.Control type="reset" onClick={setValueTable} value='Enviar' />
              )}
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </section>
  )
}

export default Formulario;
