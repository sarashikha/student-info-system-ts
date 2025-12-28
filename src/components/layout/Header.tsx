
import { AppBar, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const nav = useNavigate()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{cursor:'pointer'}} onClick={()=>nav('/')}>Student Info System</Typography>
      </Toolbar>
    </AppBar>
  )
}
