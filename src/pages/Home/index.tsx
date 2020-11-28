import React from 'react';

import Layout from '../../components/Layout';

import { Container, Banner, ListProducts, Product } from './styles';

import TigelaImg from '../../assets/tigela01.png';
import CanecaImg from '../../assets/caneca01.png';
import BannerImg from '../../assets/banner.png';

const Home: React.FC = () => {
  return (
    <Layout>
      <Container>
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
      </Container>
    </Layout>
  );
};

export default Home;
