import React from 'react';

import Layout from '../../components/Layout';

import TigelaImageSmall from '../../assets/tigela01-s.png';
import CanecaImageSmall from '../../assets/caneca01-s.png';

import {
  Container,
  BasketBody,
  BasketProducts,
  BasketFooter,
  BasketTotal,
} from './styles';

const Basket: React.FC = () => {
  return (
    <Layout showSearch={false}>
      <Container>
        <BasketBody>
          <BasketProducts>
            <h1>PRODUTOS DA CESTA</h1>
            <table>
              <tr>
                <th> </th>
                <th>DESCRIÇÃO</th>
                <th>VALOR</th>
                <th>QTDE</th>
                <th>TOTAL</th>
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
              </tr>
            </table>
            <BasketTotal>
              <span>
                VALOR TOTAL: <strong> R$ 35,00</strong>
              </span>
            </BasketTotal>
          </BasketProducts>
          <BasketFooter>
            <a className="ButtonBuyMore" href="/">
              CONTINUAR COMRANDO
            </a>
            <a className="ButtonOrder" href="/">
              FINALIZAR PEDIDO
            </a>
          </BasketFooter>
        </BasketBody>
      </Container>
    </Layout>
  );
};

export default Basket;
