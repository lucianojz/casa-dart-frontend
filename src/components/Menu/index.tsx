import React from 'react';

import { Link } from 'react-router-dom';

import { BiBasket, BiHomeCircle, BiDollar, BiUser } from 'react-icons/bi';

import { Container, Categories, MenuItem } from './styles';

const Menu: React.FC = () => {
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
          <MenuItem>
            <BiDollar size={22} />
            <Link to="/pedidos">PEDIDOS</Link>
          </MenuItem>
          <MenuItem>
            <BiUser size={22} />
            <strong>USUÁRIO</strong>
          </MenuItem>
        </Categories>
      </Container>
    </>
  );
};

export default Menu;
