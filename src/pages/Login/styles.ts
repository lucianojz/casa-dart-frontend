import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  padding: 10px 0 10px;

  display: flex;
  justify-content: center;
`;

export const LoginBody = styled.div`
  width: 800px;
  min-height: 300px;

  padding: 10px;

  background: #fff;

  border: #231f20 solid 1px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 350px;

    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      margin-top: 10px;
    }

    div {
      margin-top: 10px;
    }

    .Input {
      width: 200px;
    }
  }
`;
