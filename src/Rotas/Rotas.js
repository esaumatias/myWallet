import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Page/Home/Home';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default Rotas;
