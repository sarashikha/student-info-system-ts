import { AppBar, Toolbar, Typography, Switch, Box } from '@mui/material';

type HeaderProps = {
  darkMode: boolean;
  onToggleDarkMode: () => void;
};

export default function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          Student Info System
        </Typography>

        <Box>
          <Switch
            checked={darkMode}
            onChange={onToggleDarkMode}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
