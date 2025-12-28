
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme/theme'
import Header from './components/layout/Header'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <AppRoutes />
    </ThemeProvider>
  )
}
