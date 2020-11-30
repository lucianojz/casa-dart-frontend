import React, { useCallback, useEffect, useState } from 'react';

import Layout from '../../components/Layout';

import TigelaImageSmall from '../../assets/tigela01-s.png';
// import CanecaImageSmall from '../../assets/caneca01-s.png';

import {
  Container,
  BasketBody,
  BasketProducts,
  BasketFooter,
  BasketTotal,
} from './styles';

interface ProductBasket {
  product_id: string;
  description: string;
  amount: number;
  value: number;
  freight_charge: number;
}

interface Basket {
  products: ProductBasket[];
}

const Basket: React.FC = () => {
  const [productsBasket, setProductsBasket] = useState<ProductBasket[]>([]);
  const [total, setTotal] = useState(0);

  const handleLoadBasket = useCallback(() => {
    const localStorageBasket = localStorage.getItem('@Shop:basket');

    if (localStorageBasket) {
      const tempBasket = JSON.parse(localStorageBasket) as Basket;
      setProductsBasket(tempBasket.products);

      let calcTotal = 0;

      productsBasket.forEach(product => {
        calcTotal += product.amount * product.value;
      });

      setTotal(calcTotal);
    }
  }, []);

  useEffect(() => {
    handleLoadBasket();
  }, [handleLoadBasket]);

  return (
    <Layout showSearch={false}>
      <Container>
        <BasketBody>
          {productsBasket && (
            <>
              <BasketProducts>
                <h1>PRODUTOS DA CESTA</h1>
                <table>
                  <thead>
                    <tr>
                      <th> </th>
                      <th>DESCRIÇÃO</th>
                      <th>VALOR</th>
                      <th>QTDE</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productsBasket.map(product => (
                      <tr key={product.product_id}>
                        <td className="ImageCol">
                          <img src={TigelaImageSmall} alt="" />
                        </td>
                        <td className="DescriptionCol">
                          <span>{product.description}</span>
                        </td>
                        <td className="ValueCol">
                          <span>
                            {Number(product.value).toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </span>
                        </td>
                        <td className="AmountCol">{`${product.amount} PÇ`}</td>
                        <td className="TotalCol">
                          <span>
                            {Number(
                              product.value * product.amount,
                            ).toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <BasketTotal>
                  <span>
                    VALOR TOTAL:
                    <strong>
                      {Number(total).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </strong>
                  </span>
                </BasketTotal>
              </BasketProducts>
              <BasketFooter>
                <a className="ButtonBuyMore" href="/">
                  CONTINUAR COMPRANDO
                </a>
                <a className="ButtonOrder" href="/login">
                  FINALIZAR PEDIDO
                </a>
              </BasketFooter>
            </>
          )}
        </BasketBody>
      </Container>
    </Layout>
  );
};

export default Basket;
