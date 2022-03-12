import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Form, Row, Col, Container, Spinner, InputGroup, FormControl, Button } from 'react-bootstrap';
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
    valueAtual,
    metodoPercentual,
    setMetodoPercentual} = useContext(AppContext);
  
  const pagamento = ['Dinheiro', 'Crédito', 'Débito'];
  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

  function setValueTable() {
    const tableArray = {
      valor,
      descricao,
      moeda,
      metodo,
      tag,
    };
  
    pagamento.find((name) =>
      name === metodo
        ? setMetodoPercentual((prevState) => {
            return { ...prevState, [name]: metodoPercentual[name] + 1};
          })
        : null
    );

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
          <Row className="align-items-center">
            <Col sm='auto' className="my-1" onChange={({target}) => setValor(target.value)}>
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Valor
              </Form.Label>
              <Form.Control type="number" placeholder="Valor" value={buttonEdit ? valor : undefined}/>
            </Col>

            <Col sm='auto' className="my-1" onChange={({target}) => setDescricao(target.value)}>
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Descrição
              </Form.Label>
              <Form.Control type="text" placeholder="Descrição"  value={buttonEdit ? descricao : undefined}/>
            </Col>

            <Col sm='auto' className="my-1">
              <Form.Select onClick={({target}) => setMoeda(target.value)}>
                {currencie ? (
                  currencie.map((value, index) =>(
                    <option key={ index }>{value}</option>
                ))
                ): <option><Spinner animation="border" /></option>}
              </Form.Select>
            </Col>

            <Col sm='auto' className="my-1">
              <Form.Select onClick={({target}) => setMetodo(target.value)}>
                  {pagamento.map((value, index) =>(
                    <option key={ index }>{value}</option>
                  ))}
              </Form.Select>
            </Col>

            <Col sm='auto' className="my-1">
              <Form.Select onClick={({target}) => setTag(target.value)}>
                  {tags.map((value, index) =>(
                      <option key={ index }>{value}</option>
                  ))}
              </Form.Select>
            </Col>

            <Col xs='auto' className="my-1">
              {buttonEdit ? (
                <Button type="reset" onClick={editTable}>Alterar</Button>
              ): (
                <Button type="reset" onClick={setValueTable}>Enviar</Button>
              )}
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  )
}

export default Formulario;
