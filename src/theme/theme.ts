import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blue, deepPurple, grey } from "@mui/material/colors";

export const createAppTheme = (darkMode: boolean) => {
  let theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? blue[300] : blue[700],
      },
      secondary: {
        main: darkMode ? deepPurple[200] : deepPurple[500],
      },
      background: {
        default: darkMode ? "#121212" : grey[100],
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  });

  return responsiveFontSizes(theme);
};