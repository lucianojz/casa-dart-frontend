import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, LoginBody } from './styles';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleLogin = useCallback(() => {
    console.log('okey');
  }, []);

  return (
    <Layout>
      <Container>
        <LoginBody>
          <Form ref={formRef} onSubmit={handleLogin}>
            <strong>Email</strong>
            <Input className="Input" name="email" type="text" />
            <strong>Senha</strong>
            <Input className="Input" name="password" type="text" />

            <Button className="Button" type="submit" variation="success">
              EFETUAR LOGIN
            </Button>
            <Button className="Button" type="button" variation="error">
              ESQUECI MINHA SENHA
            </Button>
          </Form>
        </LoginBody>
      </Container>
    </Layout>
  );
};

export default Login;
