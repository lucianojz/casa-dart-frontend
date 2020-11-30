import React, { useCallback } from 'react';

import { Link, useHistory } from 'react-router-dom';

import {
  BiBasket,
  BiHomeCircle,
  BiDollar,
  BiUser,
  BiLogIn,
  BiLogOut,
} from 'react-icons/bi';

import { Container, Categories, MenuItem } from './styles';

import { useAuth } from '../../hooks/authCustomer';
import Button from '../Button';

const Menu: React.FC = () => {
  const { customer, signOut } = useAuth();
  const history = useHistory();

  const handleLogout = useCallback(() => {
    signOut();
    history.push('/');
  }, [history, signOut]);

  return (
    <>
      <Container>
        <Categories>
          <MenuItem>
            <BiHomeCircle size={22} />
            <Link to="/">HOME</Link>
          </MenuItem>
          <MenuItem>
            <BiBasket size={22} />
            <Link to="/cesta">CESTA</Link>
          </MenuItem>
          {customer.id && (
            <>
              <MenuItem>
                <BiDollar size={22} />
                <Link to="/pedidos">PEDIDOS</Link>
              </MenuItem>
              <MenuItem>
                <BiUser size={22} />
                <strong>{customer.name?.split(' ')[0]}</strong>
              </MenuItem>
              <MenuItem>
                <Button
                  icon={BiLogOut}
                  onClick={handleLogout}
                  variation="error"
                >
                  Logout
                </Button>
              </MenuItem>
            </>
          )}
          {!customer.id && (
            <>
              <MenuItem>
                <BiLogIn size={22} />
                <Link to="/login">LOGIN</Link>
              </MenuItem>
            </>
          )}
        </Categories>
      </Container>
    </>
  );
};

export default Menu;
