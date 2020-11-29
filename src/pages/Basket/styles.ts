import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  padding: 10px 0 10px;

  display: flex;
  justify-content: center;
`;

export const BasketBody = styled.div`
  width: 800px;
  min-height: 300px;

  padding: 10px;

  background: #fff;

  border: #231f20 solid 1px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

export const BasketProducts = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-bottom: 10px;
  }

  table,
  th,
  td {
    /* border: #000 solid 1px; */
  }

  td {
    height: 65px;
  }

  .ImageCol,
  .ValueCol,
  .AmountCol,
  .TotalCol {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }

  .DescriptionCol {
    width: 350px;
    /* text-align: center; */
  }
`;

export const BasketFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-top: 10px;
  /* margin-left: 10px; */

  .ButtonBuyMore {
    background: #d1604d;
    color: #fff;
  }
  .ButtonOrder {
    background: #04724d;
    color: #fff;
  }

  a {
    width: 300px;
    height: 30px;
    margin-left: 15px;

    border-radius: 5px;

    text-decoration: none;
    font-size: 16px;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BasketTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 30px 10px 0;

  span {
    font-weight: 700;
    font-size: 30px;
  }
`;
