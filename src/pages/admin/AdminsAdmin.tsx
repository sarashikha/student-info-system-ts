import AdminDesktopGuard from '../../components/admin/AdminDesktopGuard';
import { Typography, Box } from '@mui/material';

export default function AdminsAdmin() {
  return (
    <AdminDesktopGuard>
      <Box>
        <Typography variant="h5" gutterBottom>
          Admins Management
        </Typography>
      </Box>
    </AdminDesktopGuard>
  );
}
