// src/components/admin/AdminLayout.tsx
import { Box } from "@mui/material";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ p: 3, minHeight: "100vh", bgcolor: "grey.100" }}>{children}</Box>
  );
};

export default AdminLayout;
