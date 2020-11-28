import React from 'react';

import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Product from './pages/Product';

const App: React.FC = () => {
  return (
    <>
      <Product />
      <GlobalStyle />
    </>
  );
};

export default App;
