import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
`;

export const Banner = styled.div`
  width: 900px;
  max-height: 230px;

  img {
    width: 900px;
    height: auto;
  }
`;

export const ListProducts = styled.div`
  width: 900px;
  min-height: 200px;
  background: #f4f4f4;
  margin-top: 10px;
  padding-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  width: 200px;
  height: 230px;
  margin-bottom: 10px;

  padding: 5px;

  background: #fff;
  text-align: center;

  border: #231f20 solid 1px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-around;

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
