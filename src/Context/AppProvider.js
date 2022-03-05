import React, { useState, useEffect } from 'react';
import AppContext from '../Context/AppContext';
import { requestMoney } from '../Fetch/Fetch';

function AppProvider({ children }) {
  const [currencie, setCurrencie] = useState('');

  useEffect(() => {
    requestMoney().then((data) => {
      const currencies = Object.keys(data).filter((value) => value !== 'USDT');
      setCurrencie(currencies);
    });
  }, [])

  console.log(currencie);
  return (
    <AppContext.Provider
      value={ {
        currencie,
        setCurrencie,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
