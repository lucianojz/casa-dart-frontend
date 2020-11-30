import React, { createContext, useState, useCallback, useContext } from 'react';
import api from '../services/api';

// import { Container } from './styles';
interface CustomerSession {
  id: string;
  name: string;
}

interface AuthCustomerState {
  token: string;
  customer: CustomerSession;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  customer: CustomerSession;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthCustomerProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthCustomerState>({} as AuthCustomerState);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/customerSessions', {
      email,
      password,
    });

    const { token, customer } = response.data;

    const { id, full_name } = customer;
    localStorage.setItem('@Shop:token', token);
    localStorage.setItem(
      '@Shop:user',
      JSON.stringify({ id, full_name, email }),
    );

    setData({ token, customer: { id, name: full_name } as CustomerSession });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Shop:token');
    localStorage.removeItem('@Shop:user');
    localStorage.removeItem('@Shop:LastOrder');
    setData({} as AuthCustomerState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        customer: {
          id: data.customer?.id,
          name: data.customer?.name,
        },
        token: data.token,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthCustomerProvider, useAuth };
