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
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  a {
    text-decoration: none;
    color: #000;
  }

  a,
  strong {
    font-size: 20px;
    font-weight: 700;
  }

  svg {
    margin-right: 5px;
  }

  div {
    width: 120px;
  }
`;
