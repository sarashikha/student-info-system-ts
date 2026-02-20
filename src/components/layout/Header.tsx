import { AppBar, Toolbar, Typography, Switch, Box, Button } from "@mui/material";

type HeaderProps = {
  darkMode: boolean;
  onToggleDarkMode: () => void;
};

export default function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6">
          Student Info System
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          
          <Switch
            checked={darkMode}
            onChange={onToggleDarkMode}
          />

          <Button
            color="inherit"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            התנתק
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
}