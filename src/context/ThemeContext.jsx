// Import required libraries from MUI
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { useState, createContext, useContext } from 'react';

// 🔷 Define the shape of the data (TypeScript Interface)
interface ThemeContextType {
  mode: 'light' | 'dark';       // Current mode: light or dark
  toggleTheme: () => void;      // Function to toggle the mode
}

// 🔷 Create Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 🔷 Custom hook to use the theme anywhere
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('❌ useTheme must be used within ThemeProvider');
  }
  return context;
};

// 🔷 Theme Provider
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // State to control the mode (light/dark)
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // 🔷 Create MUI theme based on the current mode
  const theme = createTheme({
    palette: {
      mode,                          // 'light' or 'dark'
      primary: { main: '#1976d2' },  // Primary color (blue)
      secondary: { main: '#dc004e' },// Secondary color (pink)
    },
  });

  // 🔷 Function to toggle mode
  const toggleTheme = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
