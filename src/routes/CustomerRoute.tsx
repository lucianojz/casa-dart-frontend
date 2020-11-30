import React from 'react';

import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/authCustomer';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const CustomerRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { customer } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return customer !== undefined && customer.id ? (
          <Component />
        ) : (
          <Redirect push to={{ pathname: '/' }} />
        );
      }}
    />
  );
};

export default CustomerRoute;
