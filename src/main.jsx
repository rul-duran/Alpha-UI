import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
