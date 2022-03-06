import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Despesa from '../Page/Despesa/Despesa'
import Dashboard from '../Page/Dashboard/Dashboard';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/despesa" component={Despesa} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

export default Rotas;
