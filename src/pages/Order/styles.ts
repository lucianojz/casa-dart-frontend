import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  padding: 10px 0 10px;

  display: flex;
  justify-content: center;
`;

export const OrderBody = styled.div`
  width: 800px;
  min-height: 300px;

  padding: 10px;

  background: #fff;

  border: #231f20 solid 1px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

export const OrderProducts = styled.div`
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

  .TotalCol {
    padding-left: 25px;
    div {
      align-self: center;
      width: 40px;
      button {
        padding: 0;
      }
    }
  }

  .DescriptionCol {
    width: 350px;
  }
`;

export const OrderFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding-top: 10px;
  padding-left: 30px;
`;

export const OrderTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 10px 30px 10px 0;

  span {
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 15px;
  }
`;
