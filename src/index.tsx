import 'react-app-polyfill/ie11';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastProvider } from './context/toast';
import { ProductProvider } from './context/productContext';
import { GlobalStyle } from './assets/css/global';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

ReactDOM.render(
  <Router>
    <ToastProvider>
      <ProductProvider>
        <GlobalStyle />
        <Routes />
      </ProductProvider>
    </ToastProvider>
  </Router>,
  document.getElementById('root'),
);
