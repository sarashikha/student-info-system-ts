import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DrawerMenu() {
  const nav = useNavigate();

  return (
    <Drawer variant="permanent">
      <List>
        <ListItemButton onClick={() => nav('/admin')}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={() => nav('/admin/courses')}>
          <ListItemText primary="Courses" />
        </ListItemButton>
        <ListItemButton onClick={() => nav('/admin/students')}>
          <ListItemText primary="Students" />
        </ListItemButton>
        <ListItemButton onClick={() => nav('/admin/degree-reqs')}>
          <ListItemText primary="Degree Reqs" />
        </ListItemButton>
        <ListItemButton onClick={() => nav('/admin/messages')}>
          <ListItemText primary="Messages" />
        </ListItemButton>
        <ListItemButton onClick={() => nav('/admin/admins')}>
          <ListItemText primary="Admins" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
