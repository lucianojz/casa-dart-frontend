import React, { useCallback, useEffect, useState } from 'react';

// import { FiXCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

import TigelaImageSmall from '../../assets/tigela01-s.png';

import { Container, OrderBody, OrderProducts, OrderTotal } from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/authCustomer';
import { useToast } from '../../hooks/toast';

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

const Order: React.FC = () => {
  const [productsBasket, setProductsBasket] = useState<ProductBasket[]>([]);
  const [total, setTotal] = useState(0);
  const [freight, setFreight] = useState(0);

  const { token } = useAuth();

  const { addToast } = useToast();

  const history = useHistory();

  const handleLoadBasket = useCallback(() => {
    const localStorageBasket = localStorage.getItem('@Shop:basket');

    if (localStorageBasket) {
      const tempBasket = JSON.parse(localStorageBasket) as Basket;
      setProductsBasket(tempBasket.products);

      let calcTotal = 0;
      let freightTotal = 0;

      productsBasket.forEach(product => {
        calcTotal += product.amount * product.value;
        freightTotal += product.amount * product.freight_charge;
      });

      setTotal(calcTotal);
      setFreight(freightTotal);
    }
  }, [productsBasket]);

  useEffect(() => {
    handleLoadBasket();
  }, [handleLoadBasket]);

  const handleCreateOrder = useCallback(async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await api.post(
        'orders',
        {
          products: productsBasket,
        },
        config,
      );
      // console.log(response.data);

      const { order } = response.data;
      localStorage.setItem('@Shop:LastOrder', JSON.stringify(order));
      localStorage.removeItem('@Shop:basket');
      history.push('/detalhePedido/');
    } catch (err) {
      addToast({
        title: 'Erro ao processar pedido',
        description: 'Não foi possível processar o pedido. Tente novamente.',
        type: 'error',
      });
    }
  }, [productsBasket, token, addToast, history]);

  return (
    <Layout>
      <Container>
        <OrderBody>
          <OrderProducts>
            <h1>PRODUTOS DA CESTA</h1>
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>DESCRIÇÃO</th>
                  <th>VALOR</th>
                  <th>FRETE</th>
                  <th>QTDE</th>
                  <th>TOTAL</th>
                  {/* <th>EXCLUIR</th> */}
                </tr>
              </thead>
              <tbody>
                {productsBasket &&
                  productsBasket.map(product => (
                    <>
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
                        <td className="TotalCol">
                          <span>
                            {Number(
                              product.amount * product.freight_charge,
                            ).toLocaleString('pt-BR', {
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

                        {/* <td className="TotalCol">
                          <Button icon={FiXCircle} variation="error" />
                        </td> */}
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </OrderProducts>
          <OrderTotal>
            <span>
              VALOR FRETE:{' '}
              <strong>
                {Number(freight).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </strong>
            </span>
            <span>
              VALOR TOTAL:{' '}
              <strong>
                {Number(total).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </strong>
            </span>
            <Button
              type="button"
              variation="success"
              onClick={handleCreateOrder}
            >
              CONFIRMAR PEDIDO
            </Button>
          </OrderTotal>
        </OrderBody>
      </Container>
    </Layout>
  );
};

export default Order;
