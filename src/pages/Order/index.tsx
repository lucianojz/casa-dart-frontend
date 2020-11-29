import React from 'react';

import { FiXCircle } from 'react-icons/fi';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

import TigelaImageSmall from '../../assets/tigela01-s.png';

import {
  Container,
  OrderBody,
  OrderProducts,
  OrderTotal,
  OrderFooter,
} from './styles';

const Order: React.FC = () => {
  return (
    <Layout>
      <Container>
        <OrderBody>
          <OrderProducts>
            <h1>PRODUTOS DA CESTA</h1>
            <table>
              <tr>
                <th> </th>
                <th>DESCRIÇÃO</th>
                <th>VALOR</th>
                <th>QTDE</th>
                <th>TOTAL</th>
                <th>EXCLUIR</th>
              </tr>
              <tr>
                <td className="ImageCol">
                  <img src={TigelaImageSmall} alt="" />
                </td>
                <td className="DescriptionCol">
                  <span>
                    Tigela Porcelana 500 ml Branca Geni Porcelanas - PVC 008,
                    Tigela Porcelana 500 ml Branca Geni Porcelanas - PVC 008
                  </span>
                </td>
                <td className="ValueCol">
                  <span>R$ 35,00</span>
                </td>
                <td className="AmountCol">1 PÇ</td>
                <td className="TotalCol">
                  <span>R$ 35,00</span>
                </td>
                <td className="TotalCol">
                  <Button icon={FiXCircle} variation="error" />
                </td>
              </tr>
            </table>
          </OrderProducts>
          <OrderTotal>
            <span>
              VALOR FRETE: <strong>R$ 10,00</strong>
            </span>
            <span>
              VALOR TOTAL: <strong> R$ 35,00</strong>
            </span>
            <Button type="button" variation="success">
              FINALIZAR PEDIDO
            </Button>
          </OrderTotal>
        </OrderBody>
      </Container>
    </Layout>
  );
};

export default Order;
