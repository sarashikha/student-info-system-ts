import { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme';
import Header from './components/layout/Header';
import DrawerMenu from './components/layout/DrawerMenu';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      <Header
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <Box sx={{ display: 'flex', mt: 8 }}>
        <DrawerMenu />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <AppRoutes />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
