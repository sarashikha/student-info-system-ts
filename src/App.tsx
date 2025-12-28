import Header from './components/layout/Header';
import DrawerMenu from './components/layout/DrawerMenu';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <>
      <Header />
      <DrawerMenu />
      <AppRoutes />
    </>
  );
}

