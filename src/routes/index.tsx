import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Product from '../pages/Product';
import Basket from '../pages/Basket';
import Login from '../pages/Login';
import Order from '../pages/Order';
import OrderDetail from '../pages/OrderDetail';
import Customer from '../pages/Customer';

import CustomerRoute from './CustomerRoute';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/produto/:id+" exact component={Product} />
    <Route path="/cesta" exact component={Basket} />
    <Route path="/login" exact component={Login} />
    <Route path="/cliente" exact component={Customer} />
    <CustomerRoute path="/pedidos" exact component={Order} />
    <CustomerRoute path="/detalhePedido" exact component={OrderDetail} />
  </Switch>
);

export default Routes;
