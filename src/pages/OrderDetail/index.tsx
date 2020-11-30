import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { format, utcToZonedTime } from 'date-fns-tz';

import Layout from '../../components/Layout';
import { Container, OrderData } from './styles';

interface OrderData {
  id: string;
  customer_id: string;
  created_at: string;
}

const OrderDetail: React.FC = () => {
  const [order, setOrder] = useState<OrderData>({} as OrderData);

  const history = useHistory();

  useEffect(() => {
    const orderStored = localStorage.getItem('@Shop:LastOrder');

    if (!orderStored) {
      history.push('/');
    } else {
      const { id, customer_id, created_at } = JSON.parse(orderStored);
      setOrder({ id, customer_id, created_at });
    }
  }, [history]);

  return (
    <Layout showSearch={false}>
      <Container>
        <OrderData>
          <h2>{`ID do Pedido: ${order.id}`}</h2>
          <h3>
            {`Horário do Pedido: ${
              order.created_at
                ? format(
                    utcToZonedTime(order.created_at, 'America/Sao_Paulo'),
                    'dd/MM/yyyy - HH:mm:ss',
                  )
                : ''
            }`}
          </h3>
        </OrderData>
      </Container>
    </Layout>
  );
};

export default OrderDetail;
