import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Product from '../pages/Product';
import Basket from '../pages/Basket';
import Login from '../pages/Login';
import Order from '../pages/Order';
import Customer from '../pages/Customer';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/produto/:id+" exact component={Product} />
    <Route path="/cesta" exact component={Basket} />
    <Route path="/login" exact component={Login} />
    <Route path="/pedido" exact component={Order} />
    <Route path="/cliente" exact component={Customer} />
  </Switch>
);

export default Routes;
