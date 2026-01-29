import { Box } from '@mui/material';
import Header from '../layout/Header';
import DrawerMenu from '../layout/DrawerMenu';
import AdminDesktopGuard from './AdminDesktopGuard';

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <AdminDesktopGuard>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <DrawerMenu />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </AdminDesktopGuard>
  );
}
