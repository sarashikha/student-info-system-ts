import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { createAppTheme } from "./theme";
import Header from "./components/layout/Header";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => createAppTheme(darkMode), [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Header
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
        />

        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;