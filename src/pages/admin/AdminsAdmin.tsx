import { useEffect, useState } from 'react';
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';

type Admin = {
  id: string;
  fullName: string;
  email: string;
  role: string;
};

const defaultAdmins: Admin[] = [
  { id: '1', fullName: 'System Admin', email: 'admin@system.com', role: 'Main Admin' },
  { id: '2', fullName: 'Content Manager', email: 'content@system.com', role: 'Manager' }
];

export default function AdminsAdmin() {
  const [admins, setAdmins] = useState<Admin[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('admins');
    if (data) {
      setAdmins(JSON.parse(data));
    } else {
      localStorage.setItem('admins', JSON.stringify(defaultAdmins));
      setAdmins(defaultAdmins);
    }
  }, []);

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Admins Management
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {admins.map(admin => (
            <TableRow key={admin.id}>
              <TableCell>{admin.fullName}</TableCell>
              <TableCell>{admin.email}</TableCell>
              <TableCell>{admin.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
