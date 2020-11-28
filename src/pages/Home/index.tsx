import React from 'react';

import {
  Menu,
  Container,
  Banner,
  ListProducts,
  Product,
  Logo,
  Footer,
} from './styles';

import TigelaImg from '../../assets/tigela01.png';
import CanecaImg from '../../assets/caneca01.png';
import BannerImg from '../../assets/banner.png';
import LogoImg from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Logo>
          <img src={LogoImg} alt="" />
        </Logo>
        <Menu>
          <a href="/">HOME</a>
          <a href="/">DECOR</a>
          <a href="/">LOUÇAS</a>
          <a href="/">LEMBRANÇAS</a>
        </Menu>
        <Banner>
          <img src={BannerImg} alt="" />
        </Banner>
        <ListProducts>
          <Product>
            <img src={TigelaImg} alt="" />
            <span>Tigela Porcelana 500 ml Branca Geni Porcelanas PVC 008</span>
            <strong>R$ 25,00</strong>
            <a href="/">COMPRAR</a>
          </Product>
          <Product>
            <img src={CanecaImg} alt="" />
            <span>Caneca artasanal em porcelana Porcelani Decor</span>
            <strong>R$ 15,00</strong>
            <a href="/">COMPRAR</a>
          </Product>

          <Product>
            <img src={TigelaImg} alt="" />
            <span>Tigela Porcelana 500 ml Branca Geni Porcelanas PVC 008</span>
            <strong>R$ 25,00</strong>
            <a href="/">COMPRAR</a>
          </Product>
          <Product>
            <img src={CanecaImg} alt="" />
            <span>Caneca artasanal em porcelana Porcelani Decor</span>
            <strong>R$ 15,00</strong>
            <a href="/">COMPRAR</a>
          </Product>

          <Product>
            <img src={TigelaImg} alt="" />
            <span>Tigela Porcelana 500 ml Branca Geni Porcelanas PVC 008</span>
            <strong>R$ 25,00</strong>
            <a href="/">COMPRAR</a>
          </Product>
          <Product>
            <img src={CanecaImg} alt="" />
            <span>Caneca artasanal em porcelana Porcelani Decor</span>
            <strong>R$ 15,00</strong>
            <a href="/">COMPRAR</a>
          </Product>

          <Product>
            <img src={TigelaImg} alt="" />
            <span>Tigela Porcelana 500 ml Branca Geni Porcelanas PVC 008</span>
            <strong>R$ 25,00</strong>
            <a href="/">COMPRAR</a>
          </Product>
          <Product>
            <img src={CanecaImg} alt="" />
            <span>Caneca artasanal em porcelana Porcelani Decor</span>
            <strong>R$ 15,00</strong>
            <a href="/">COMPRAR</a>
          </Product>
        </ListProducts>
        <Footer>
          <span>Casa DArt - Artigos artesanais para sua casa! </span>
          <strong>Desenvolvido por - Luciano Janzkovski - 2020</strong>
        </Footer>
      </Container>
    </>
  );
};

export default Home;
