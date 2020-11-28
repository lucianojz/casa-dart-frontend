import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  min-height: 35px;
  background: #ead2ac;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
`;

export const Categories = styled.div`
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
