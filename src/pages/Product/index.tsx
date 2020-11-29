import React from 'react';
import Layout from '../../components/Layout';

import CanecaImageL from '../../assets/caneca01-L.png';

import {
  Container,
  ProductBody,
  ProductDetail,
  ProductImage,
  ProductBuy,
} from './styles';

const Product: React.FC = () => {
  return (
    <>
      <Layout>
        <Container>
          <ProductBody>
            <ProductDetail>
              <h1>Caneca Artesanal em porcelana - Porcelani Decor</h1>
              <h3>Detalhes do produto:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tincidunt lacus aliquet, fermentum est nec, finibus sem. Integer
                vitae elementum magna. Morbi ornare elit nec luctus eleifend.
                Mauris sit amet fermentum urna. Cras consequat ultricies nibh at
                egestas. Aenean gravida lectus et ipsum ultricies, non venenatis
                dolor condimentum. Nunc ex diam, imperdiet sit amet felis vitae,
                lacinia fringilla erat. Curabitur sapien lorem, cursus ac
                elementum et, sollicitudin et est.
              </p>
              <ProductBuy>
                <strong>R$ 15,00</strong>
                <a href="/">COMPRAR</a>
              </ProductBuy>
            </ProductDetail>
            <ProductImage>
              <img src={CanecaImageL} alt="" />
            </ProductImage>
          </ProductBody>
        </Container>
      </Layout>
    </>
  );
};

export default Product;
