import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Layout from '../../components/Layout';

// import TigelaImg from '../../assets/tigela01.png';
// import CanecaImg from '../../assets/caneca01.png';
import BannerImg from '../../assets/banner.png';

import { Container, Banner, ListProducts, Product } from './styles';

interface ProductData {
  id: string;
  name: string;
  description: string;
  reference: string;
  value: number;
  promo_value: number;
  freight_charge: number;
  available: boolean;
  image_url: string;
  created_at: Date;
  updated_at: Date;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  const handleLoadProducts = useCallback(async () => {
    await api.get('products').then(response => {
      // console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    handleLoadProducts();
  }, [handleLoadProducts]);

  return (
    <Layout>
      <Container>
        <Banner>
          <img src={BannerImg} alt="" />
        </Banner>
        <ListProducts>
          {products.map(product => (
            <Product key={product.id}>
              <img src={product.image_url} alt="" />
              <span>{product.description}</span>
              <strong>
                {Number(product.value).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </strong>
              <Link to={`/produto/${product.id}`}>COMPRAR</Link>
            </Product>
          ))}
        </ListProducts>
      </Container>
    </Layout>
  );
};

export default Home;
