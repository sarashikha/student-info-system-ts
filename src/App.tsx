import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { createAppTheme } from "./theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(() => createAppTheme(darkMode), [darkMode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;