import React from 'react';

import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Product from './pages/Product';
import Basket from './pages/Basket';

const App: React.FC = () => {
  return (
    <>
      <Basket />
      <GlobalStyle />
    </>
  );
};

export default App;
