import React from 'react';
import ReactDOM from 'react-dom/client';
import { RegisterProvider } from './context/RegisterContext';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegisterProvider>
      <GlobalStyle />
      <Home />
    </RegisterProvider>
  </React.StrictMode>,
);
