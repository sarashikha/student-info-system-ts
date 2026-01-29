import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { blue, deepPurple, grey } from '@mui/material/colors';

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[700],
    },
    secondary: {
      main: deepPurple[500],
    },
    background: {
      default: grey[100],
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[300],
    },
    secondary: {
      main: deepPurple[200],
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };
