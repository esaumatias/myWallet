import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Despesa from '../Page/Despesa/Despesa'
import Dashboard from '../Page/Dashboard/Dashboard';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/Despesas" component={Despesa} />
    </Switch>
  )
}

export default Rotas;
