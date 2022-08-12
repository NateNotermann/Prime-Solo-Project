import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';

// MUI Theme imports // 
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { red, blue, green, purple, yellow, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: '#73e8ff',
      main: '#29b6f6',
      dark: '#0086c3',
    },
    secondary: {  
      light: '#e91e63',
      main: '#ff6090',
      dark: '#b0003a',
    },
    success: {
      main: green[500]
    },
    warning: {
      main: red[500]
    },
    error: {
      main: red[500]
    },
  },
});



ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('react-root'),
);
