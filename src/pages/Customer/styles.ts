import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  padding: 10px 0 10px;

  display: flex;
  justify-content: center;
`;

export const CustomerBody = styled.div`
  width: 800px;
  min-height: 300px;

  padding: 10px;

  background: #fff;

  border: #231f20 solid 1px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CustomerDetail = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .InputName,
  .InputEmail,
  .InputAddress {
    width: 400px;
  }
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const FormFooter = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: column;

  .Button {
    margin-bottom: 10px;
  }
`;
