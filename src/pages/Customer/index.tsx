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

  const handleAddCustomer = useCallback((data, { reset }) => {
    console.log(data);
    return true;
  }, []);

  return (
    <Layout>
      <Container>
        <CustomerBody>
          <CustomerDetail>
            <Form ref={formRef} onSubmit={handleAddCustomer}>
              <FormFields>
                <strong>Nome Completo</strong>
                <Input className="InputName" name="full_name" type="text" />

                <strong>Email</strong>
                <Input className="InputEmail" name="email" type="text" />

                <strong>Senha</strong>
                <Input name="password" type="password" />

                <strong>CPF</strong>
                <Input name="document" type="text" />

                <strong>Data de Nascimento</strong>
                <Input name="birth_date" type="date" />

                <strong>Telefone</strong>
                <Input name="phone" type="text" />

                <strong>Endereço</strong>
                <Input name="address" type="text" />

                <strong>Complemento</strong>
                <Input name="address_complement" type="text" />

                <strong>CEP</strong>
                <Input
                  name="postal_code"
                  type="text"
                  required
                  pattern="\d{5}-\d{3}"
                />
              </FormFields>
              <FormFooter>
                <Button type="submit" variation="success">
                  SALVAR CADASTRO
                </Button>
                <Button type="button" variation="error">
                  CANCELAR CADASTRO
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
