import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  max-width: 900px;
`;

export const Logo = styled.div`
  width: 900px;
  margin-top: 20px;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div`
  width: 900px;
  height: 40px;
  background: #ead2ac;

  display: flex;
  justify-items: center;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    color: #000;
  }
`;

export const Banner = styled.div`
  /* background: #2f2f2f; */
  width: 900px;
  max-height: 230px;

  img {
    width: 90%;
    height: auto;
  }
`;

export const ListProducts = styled.div`
  width: 900px;
  min-height: 200px;
  background: #f4f4f4;
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

export const Footer = styled.div`
  width: 900px;
  height: 50px;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
