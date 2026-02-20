import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";

import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MessageIcon from "@mui/icons-material/Message";

export default function AdminHome() {
  const navigate = useNavigate();
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  const cards = [
    {
      title: "ניהול סטודנטים",
      path: "/admin/students",
      color: "#1976d2",
      icon: <SchoolIcon sx={{ fontSize: 50 }} />,
    },
    {
      title: "ניהול קורסים",
      path: "/admin/courses",
      color: "#2e7d32",
      icon: <MenuBookIcon sx={{ fontSize: 50 }} />,
    },
    {
      title: "דרישות תואר",
      path: "/admin/degree-reqs",
      color: "#ed6c02",
      icon: <AssignmentIcon sx={{ fontSize: 50 }} />,
    },
    {
      title: "הודעות",
      path: "/admin/messages",
      color: "#9c27b0",
      icon: <MessageIcon sx={{ fontSize: 50 }} />,
    },
  ];

  return (
    <>
      <AdminNavbar />

      <Box
        sx={{
          padding: 6,
          direction: "rtl",
          textAlign: "right",
          minHeight: "100vh",
          background: darkMode
            ? "linear-gradient(135deg, #1e1e2f, #2c2c3e)"
            : "linear-gradient(135deg, #f5f7fa, #e4e8f0)",
        }}
      >
        <Box sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
            לוח בקרה מנהל
          </Typography>

          <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
            ניהול מערכת אקדמית – סטודנטים, קורסים ודרישות תואר
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={10}
                sx={{
                  padding: 5,
                  borderRadius: 4,
                  cursor: "pointer",
                  textAlign: "center",
                  background: `linear-gradient(135deg, ${card.color}, #00000020)`,
                  color: "white",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.07)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
                  },
                }}
                onClick={() => navigate(card.path)}
              >
                <Box sx={{ mb: 2 }}>{card.icon}</Box>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: 18 }}
                >
                  {card.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}