import Header from './components/layout/Header';
import DrawerMenu from './components/layout/DrawerMenu';
import AppRoutes from './routes/AppRoutes';
import { Box } from '@mui/material';

export default function App() {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <DrawerMenu />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <AppRoutes />
        </Box>
      </Box>
    </>
  );
}
