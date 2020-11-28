import React from 'react';

import { Container, Categories } from './styles';

const Menu: React.FC = () => {
  return (
    <>
      <Container>
        <Categories>
          <a href="/">HOME</a>
          <a href="/">DECOR</a>
          <a href="/">LOUÇAS</a>
          <a href="/">LEMBRANÇAS</a>
        </Categories>
      </Container>
    </>
  );
};

export default Menu;
