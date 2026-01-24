import { useState } from 'react';
import { ThemeProvider, CssBaseline, Switch, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme';

import Header from './components/layout/Header';
import DrawerMenu from './components/layout/DrawerMenu';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      <Header />

      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <DrawerMenu />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* מתג מעבר בין מצב בהיר לכהה */}
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />

          <AppRoutes />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

