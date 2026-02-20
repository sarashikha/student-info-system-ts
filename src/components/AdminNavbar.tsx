import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ direction: "rtl" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          direction: "rtl",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          מערכת ניהול סטודנטים
        </Typography>

        <Box>
          {/* حالياً زر الدارك مود شكلي فقط */}
          <IconButton color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          <Button color="inherit" onClick={handleLogout}>
            התנתק
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}