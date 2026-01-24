import AdminDesktopGuard from '../../components/admin/AdminDesktopGuard';
import { Typography, Box } from '@mui/material';

export default function StudentsAdmin() {
  return (
    <AdminDesktopGuard>
      <Box>
        <Typography variant="h5" gutterBottom>
          Students Management
        </Typography>
      </Box>
    </AdminDesktopGuard>
  );
}
