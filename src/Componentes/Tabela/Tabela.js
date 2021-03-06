import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Container } from 'react-bootstrap';
import './Tabela.css';

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
    setValueAtual,
    setSumTag,
    sumTags,
    setMetodoPercentual,
    metodoPercentual} = useContext(AppContext);
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const pagamento = ['Dinheiro', 'Crédito', 'Débito'];
    const values = tableValues.slice();

  function deleteTable(index, valor, moeda) {
    tags.find((value) =>
      value === values[index].tag
        ? setSumTag((prevState) => {
            return { ...prevState, [value]: sumTags[value] - (valor * currencieAll[moeda].ask) };
          })
        : null
    );
    pagamento.find((name) =>
      name === values[index].metodo
        ? setMetodoPercentual((prevState) => {
            return { ...prevState, [name]: metodoPercentual[name] - 1};
          })
        : null
    );

    values.splice(index, 1)
    setTableValues(values);
  }

  function editTable({target}) {
    const { alt, name } = target;
    setButtonEdit(!buttonEdit);
    const values = tableValues.slice();
    setIndexTable(alt);
    setArrayIndex(values[alt]);
    setValor(values[alt].valor);
    setDescricao(values[alt].descricao);
    setMoeda(values[alt].moeda);
    setMetodo(values[alt].metodo);
    setTag(values[alt].tag);
    setValueAtual(name);
  }

  return (
    <Container>
      <div class="table-responsive">
        <table class="table">
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
                <td>{value.descricao}</td>
                <td>{value.tag}</td>
                <td>{value.metodo}</td>
                <td>{value.valor}</td>
                <td>{value.moeda}</td>
                <td>{currencieAll ? currencieAll[value.moeda].ask : null}</td>
                <td>{currencieAll ? (currencieAll[value.moeda].ask * value.valor).toFixed(2) : null}</td>
                <td>Real</td>
                <td>
                  <button onClick={editTable} className="iconButton">
                    <img src="https://img.icons8.com/color/48/000000/multi-edit.png" alt={index} name={value.valor}/>
                  </button>
                  <button onClick={() => deleteTable(index, value.valor, value.moeda)} className="iconButton">
                    <img src="https://img.icons8.com/color/48/000000/delete.png" alt={index} name={value.moeda} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export default Tabela;
