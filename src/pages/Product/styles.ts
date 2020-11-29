import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  padding: 10px 0 10px;

  display: flex;
  justify-content: center;
`;

export const ProductBody = styled.div`
  width: 800px;
  min-height: 300px;

  padding: 10px;

  background: #fff;

  border: #231f20 solid 1px;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
`;

export const ProductDetail = styled.div`
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 15px;

  p {
    font-weight: 300;
    font-size: 16px;
  }
`;

export const ProductBuy = styled.div`
  /* width: 200px; */

  display: flex;
  align-content: flex-end;
  justify-content: flex-end;

  align-items: center;

  strong {
    font-weight: 700;
    font-size: 20px;
    margin-right: 20px;
  }

  a {
    width: 130px;
    height: 34px;

    background: #ead2ac;
    color: #000;
    border-radius: 5px;

    text-decoration: none;
    font-size: 20px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
