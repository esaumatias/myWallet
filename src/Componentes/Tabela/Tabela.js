import React, { useContext, useEffect } from 'react';
import AppContext from '../../Context/AppContext';
import { Table, Container } from 'react-bootstrap';

function Tabela() {
  const {
    tableValues,
    setTableValues,
    setValor,
    setDescricao,
    setMoeda,
    setMetodo,
    setTag,
    buttonEdit,
    setButtonEdit,
    setIndexTable,
    setArrayIndex,
    currencieAll,
    setSumConverter} = useContext(AppContext);

  useEffect(() => {
    
  }, [])

  function deleteTable({target}) {
    const { alt } = target;
    const values = tableValues.slice();
    values.splice(alt, 1)
    setTableValues(values);
  }

  function editTable({target}) {
    const { alt } = target;
    setButtonEdit(!buttonEdit);
    const values = tableValues.slice();
    setIndexTable(alt);
    setArrayIndex(values[alt]);
    setValor(values[alt].valor);
    setDescricao(values[alt].descricao);
    setMoeda(values[alt].moeda);
    setMetodo(values[alt].metodo);
    setTag(values[alt].tag);
  }

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {tableValues.map((value, index) => (
            <tr key={index}>
              <td>{value[0].descricao}</td>
              <td>{value[0].tag}</td>
              <td>{value[0].metodo}</td>
              <td>{value[0].valor}</td>
              <td>{value[0].moeda}</td>
              <td>{currencieAll ? currencieAll[value[0].moeda].ask : null}</td>
              <td>{currencieAll ? (currencieAll[value[0].moeda].ask * value[0].valor).toFixed(2) : null}</td>
              <td>Real</td>
              <td>
                <button onClick={editTable}>
                  <img src="https://img.icons8.com/color/48/000000/multi-edit.png" alt={index} />
                </button>
                <button onClick={deleteTable} >
                  <img src="https://img.icons8.com/color/48/000000/delete.png" alt={index} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Tabela;
