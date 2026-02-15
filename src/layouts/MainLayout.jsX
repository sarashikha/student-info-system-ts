// src/layouts/MainLayout.jsx
import { Box } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";
import DrawerMenu from "../components/layout/DrawerMenu";

const MainLayout = ({ children }) => {
  const { isMobile } = useResponsive();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* סרגל צד - מופיע רק במחשב שולחני*/}
      <DrawerMenu isMobile={isMobile} />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          p: isMobile ? 2 : 3,
          width: isMobile ? "100%" : "calc(100% - 240px)",
          marginLeft: isMobile ? 0 : "240px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
