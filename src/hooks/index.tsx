import React from 'react';

import { ToastProvider } from './toast';
import { AuthCustomerProvider } from './authCustomer';

const AppProvider: React.FC = ({ children }) => (
  <AuthCustomerProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthCustomerProvider>
);

export default AppProvider;
