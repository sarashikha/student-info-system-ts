import AdminDesktopGuard from '../../components/admin/AdminDesktopGuard';
import { Typography, Box } from '@mui/material';

export default function CoursesAdmin() {
  return (
    <AdminDesktopGuard>
      <Box>
        <Typography variant="h5" gutterBottom>
          Courses Management
        </Typography>
      </Box>
    </AdminDesktopGuard>
  );
}
