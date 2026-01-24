import AdminDesktopGuard from '../../components/admin/AdminDesktopGuard';
import { Typography, Box } from '@mui/material';

export default function DegreeRequirementsAdmin() {
  return (
    <AdminDesktopGuard>
      <Box>
        <Typography variant="h5" gutterBottom>
          Degree Requirements Management
        </Typography>
      </Box>
    </AdminDesktopGuard>
  );
}
