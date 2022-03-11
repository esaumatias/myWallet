import React, { useState, useEffect } from 'react';
import AppContext from '../Context/AppContext';
import { requestMoney } from '../Fetch/Fetch';

function AppProvider({ children }) {
  const [currencie, setCurrencie] = useState('');
  const [currencieAll, setCurrencieAll] = useState([]);
  const [tableValues, setTableValues] = useState([]);
  const [editTable, setEditTable] = useState([]);
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [moeda, setMoeda] = useState('USD');
  const [metodo, setMetodo] = useState('Dinheiro');
  const [tag, setTag] = useState('Alimentação');
  const [buttonEdit, setButtonEdit] = useState(false);
  const [indexTable, setIndexTable] = useState(0);
  const [arrayIndex, setArrayIndex] = useState([]);
  const [valueAtual, setValueAtual] = useState(0);
  const [sumTags, setSumTag] = useState({Alimentação: 0,
    Lazer: 0,
    Trabalho: 0,
    Transporte: 0,
    Saúde: 0});
  const [metodoPercentual, setMetodoPercentual] = useState({Dinheiro: 0,
    Crédito: 0,
    Débito: 0});

  useEffect(() => {
    requestMoney().then((data) => {
      const currencies = Object.keys(data).filter((value) => value !== 'USDT');
      setCurrencie(currencies);
      setCurrencieAll(data);
    });
  }, [])

  return (
    <AppContext.Provider
      value={{
        currencie,
        setCurrencie,
        tableValues,
        setTableValues,
        editTable,
        setEditTable,
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
        setIndexTable,
        arrayIndex,
        setArrayIndex,
        currencieAll,
        setCurrencieAll,
        sumTags,
        setSumTag,
        valueAtual,
        setValueAtual,
        metodoPercentual,
        setMetodoPercentual
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
