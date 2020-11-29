import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import Layout from '../../components/Layout';
import Button from '../../components/Button';

import api from '../../services/api';

import CanecaImageL from '../../assets/caneca01-L.png';

import {
  Container,
  ProductBody,
  ProductDetail,
  ProductInfo,
  ProductImage,
  ProductBuy,
} from './styles';

interface ProductParams {
  id: string;
}

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

interface ProductBasket {
  product_id: string;
  amount: number;
  value: number;
  freight_charge: number;
}

interface Basket {
  products: ProductBasket[];
}

const Product: React.FC = () => {
  const [product, setProduct] = useState<ProductData | null>(null);
  const { addToast } = useToast();

  const { params } = useRouteMatch<ProductParams>();

  useEffect(() => {
    api.get(`products/${params.id}`).then(response => {
      setProduct(response.data);
    });
  }, [params.id]);

  const handleAddToBasket = useCallback(() => {
    const basket = localStorage.getItem('@Shop:basket');

    let tempBasket = { products: [] as ProductBasket[] } as Basket;

    let productExists = false;

    if (basket) {
      tempBasket = JSON.parse(basket) as Basket;
      const productInBasket = tempBasket.products.find(prod => {
        return prod.product_id === params.id;
      });
      if (productInBasket) productExists = true;
    }

    if (productExists) {
      addToast({
        type: 'error',
        title: 'Produto já adicionado',
        description: 'Este produto já está na sua cesta.',
      });
      return;
    }

    tempBasket.products.push({
      product_id: params.id,
      amount: 1,
      value: product?.value,
      freight_charge: product?.freight_charge,
    } as ProductBasket);

    addToast({
      type: 'success',
      title: 'Produto adicionado',
      description: 'Produto adicionado a sua cesta.',
    });

    localStorage.setItem('@Shop:basket', JSON.stringify(tempBasket));
  }, []);

  return (
    <>
      <Layout>
        <Container>
          {product && (
            <>
              <ProductBody>
                <ProductDetail>
                  <ProductInfo>
                    <h1>{product.name}</h1>
                    <h3>Detalhes do produto:</h3>
                    <p>{product.description}</p>
                  </ProductInfo>
                  <ProductImage>
                    <img src={CanecaImageL} alt="" />
                  </ProductImage>
                </ProductDetail>
                <ProductBuy>
                  <strong>
                    {Number(product.value).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </strong>
                  <Button
                    type="button"
                    variation="warning"
                    onClick={handleAddToBasket}
                  >
                    COMPRAR
                  </Button>
                </ProductBuy>
              </ProductBody>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Product;
