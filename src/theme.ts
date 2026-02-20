import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blue, deepPurple } from "@mui/material/colors";

export const createAppTheme = (darkMode: boolean) => {
  let theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: blue[700],
      },
      secondary: {
        main: deepPurple[500],
      },
    },
    typography: {
      fontFamily: "Roboto, Arial",
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
};