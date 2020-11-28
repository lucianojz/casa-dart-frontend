import React from 'react';

import Menu from '../Menu';

import { Search, Container, Content, Logo, Footer, Button } from './styles';

import LogoImg from '../../assets/logo.svg';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="" />
      </Logo>
      <Menu />
      <Search>
        <input type="text" />
        <Button>Pesquisar</Button>
      </Search>

      <Content>{children}</Content>
      <Footer>
        <span>Casa DArt - Artigos artesanais para sua casa! </span>
        <strong>Desenvolvido por - Luciano Janzkovski - 2020</strong>
      </Footer>
    </Container>
  );
};

export default Layout;
