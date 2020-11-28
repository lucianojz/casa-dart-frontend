import styled from 'styled-components';

export const Container = styled.div`
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

export const Search = styled.form`
  padding: 10px 0 10px;
  display: flex;
  justify-content: center;

  input {
    width: 400px;
    margin-right: 5px;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 34px;

  background: #f4f4f4;
  color: #000;
  border-radius: 5px;

  font-size: 20px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 900px;
  min-height: 200px;
  background: #f4f4f4;
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
