import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Form, Row, Col, Container, Spinner } from 'react-bootstrap';
import './Formulario.css';

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
    currencieAll,
    setSumTag,
    sumTags,
    valueAtual} = useContext(AppContext);
  
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
  
    tags.find((name) =>
      name === tag
        ? setSumTag((prevState) => {
            return { ...prevState, [name]: sumTags[name] + (parseInt(valor) * currencieAll[moeda].ask) };
          })
        : null
    );
    
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

    tags.find((name) =>
    name === values[indexTable].tag
      ? setSumTag((prevState) => {
          return { ...prevState, [name]: sumTags[name] + ((parseInt(valor) - valueAtual) * currencieAll[moeda].ask) };
        })
      : null
  );
    
    values[indexTable] = {valor, descricao, moeda, metodo, tag}
    setTableValues(values);
  }


  return (
    <section>
      <Container>
        <h1>Despesas</h1>
        <Form>
          <Row>
           <Form.Group as={Col} controlId="formGridState" onChange={({target}) => setValor(target.value)} id="formGridState">
              <Form.Control type="number" placeholder="Valor" value={buttonEdit ? valor : undefined}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onChange={({target}) => setDescricao(target.value)} id="formGridState">
              <Form.Control type="text" placeholder="Descrição"  value={buttonEdit ? descricao : undefined}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setMoeda(target.value)} id="formGridState">
              <Form.Select>
                {currencie ? (
                  currencie.map((value, index) =>(
                    <option key={ index }>{value}</option>
                ))
                ): <option><Spinner animation="border" /></option>}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setMetodo(target.value)} id="formGridState">
              <Form.Select>
                {pagamento.map((value, index) =>(
                  <option key={ index }>{value}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onClick={({target}) => setTag(target.value)} id="formGridState">
              <Form.Select>
                {tags.map((value, index) =>(
                    <option key={ index }>{value}</option>
                ))}
              </Form.Select>
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridState" id="formGridState">
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
