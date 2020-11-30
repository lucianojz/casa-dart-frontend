import React, { useRef, useCallback } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  CustomerBody,
  CustomerDetail,
  FormFields,
  FormFooter,
} from './styles';

const Customer: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleAddCustomer = useCallback(() => {
    return true;
  }, []);

  return (
    <Layout>
      <Container>
        <CustomerBody>
          <CustomerDetail>
            <Form ref={formRef} onSubmit={handleAddCustomer}>
              <FormFields>
                <Input
                  className="InputName"
                  name="full_name"
                  type="text"
                  label="Nome Completo"
                />

                <Input
                  className="InputEmail"
                  name="email"
                  type="text"
                  label="Email"
                />

                <Input name="password" type="password" label="Senha" />

                <Input name="document" type="text" label="CPF" />

                <Input name="phone" type="text" label="Telefone" />

                <Input
                  className="InputAddress"
                  name="address"
                  type="text"
                  label="Endereço"
                />

                <Input
                  className="InputAddress"
                  name="address_complement"
                  type="text"
                  label="Complemento"
                />

                <Input name="postal_code" type="text" label="CEP" />
              </FormFields>
              <FormFooter>
                <Button type="button" variation="error">
                  CANCELAR CADASTRO
                </Button>
                <Button type="submit" variation="success">
                  CADASTRAR
                </Button>
              </FormFooter>
            </Form>
          </CustomerDetail>
        </CustomerBody>
      </Container>
    </Layout>
  );
};

export default Customer;
