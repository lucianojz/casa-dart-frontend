import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/authCustomer';
import { useToast } from '../../hooks/toast';

import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, LoginBody } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleLogin = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Informe seu email')
            .email('Email inválido'),
          password: Yup.string().required('Informe sua senha'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
        history.push('/pedidos');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro no login',
          description:
            'Ocorreu um erro ao efetuar o login. Verifique suas informações e tente novamente.',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Layout>
      <Container>
        <LoginBody>
          <Form ref={formRef} onSubmit={handleLogin}>
            <strong>Email</strong>
            <Input className="Input" name="email" type="text" />
            <strong>Senha</strong>
            <Input className="Input" name="password" type="password" />

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
