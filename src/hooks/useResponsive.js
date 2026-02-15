import { useMediaQuery } from "@mui/material";

export const useResponsive = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:960px)");
  const isDesktop = useMediaQuery("(min-width:961px)");

  return { isMobile, isTablet, isDesktop };
};
