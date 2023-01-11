import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Home';
import Team from './Team';

import reportWebVitals from './reportWebVitals';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContactForm from './components/Contacts';

const font = "'Inter', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      main: '#7F56D9',
      purple: '#6941C6',
      gray: '#667085',
      gray100: '#F2F4F7',
      gray300: '#D0D5DD',
      gray500: '#667085',
      gray700: '#344054',
      grayBg: '#F9F5FF',
      black: '#101828',
      white: '#fff',
      contrastText: '#000',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: { fontFamily: font },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: font,
          fontSize: '16px',
          textTransform: 'none',
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/contacts',
    element: <ContactForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
