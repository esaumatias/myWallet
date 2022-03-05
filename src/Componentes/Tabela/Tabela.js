import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Table, Container } from 'react-bootstrap';

function Tabela() {
  const { tableValues } = useContext(AppContext);
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
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
              <td>{value.id}</td>
              <td>{value.descricao}</td>
              <td>{value.tag}</td>
              <td>{value.metodo}</td>
              <td>{value.valor}</td>
              <td>{value.moeda}</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Real</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Tabela;
