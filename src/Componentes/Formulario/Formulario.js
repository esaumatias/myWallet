import React, { useContext, useState } from 'react';
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
    indexTable,
    arrayIndex} = useContext(AppContext);
  
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
    setTableValues([...tableValues, tableArray]);
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

  console.log(indexTable);

  return (
    <section>
      <Container>
        <Form>
          <Row>
           <Form.Group as={Col} controlId="formGridState" onChange={({target}) => setValor(target.value)}>
              <Form.Control type="number" placeholder="Valor" value={buttonEdit ? valor : null}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onChange={({target}) => setDescricao(target.value)}>
              <Form.Control type="text" placeholder="Descrição"  value={buttonEdit ? descricao : null}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setMoeda(target.value)}>
              <Form.Select value={buttonEdit ? moeda : null}>
                {currencie ? (
                  currencie.map((value, index) =>(
                    <option key={ index }>{value}</option>
                ))
                ): <Spinner animation="border" />}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setMetodo(target.value)}>
              <Form.Select value={buttonEdit ? metodo : null}>
                {pagamento.map((value, index) =>(
                  <option key={ index }>{value}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setTag(target.value)}>
              <Form.Select value={buttonEdit ? tag : null}>
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
