import { useEffect, useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell,
  TableBody, Button, Stack, Typography, Paper
} from '@mui/material';
import { Student } from '../../models/Student';
import { storageService } from '../../services/storageService';
import StudentForm from '../../forms/StudentForm';

export default function StudentsAdmin() {
  const [list, setList] = useState<Student[]>([]);
  const [selected, setSelected] = useState<Student>();

  const load = () => {
    setList(storageService.get<Student>('students'));
    setSelected(undefined);
  };

  useEffect(load, []);

  return (
    <Stack spacing={3}>
      <Typography variant="h4">ניהול סטודנטים</Typography>

      <Paper sx={{ p: 2 }}>
        <StudentForm selected={selected} onSave={load} />
      </Paper>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ת"ז</TableCell>
            <TableCell>שם</TableCell>
            <TableCell>אימייל</TableCell>
            <TableCell>סטטוס</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(s => (
            <TableRow key={s.id}>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.fullName}</TableCell>
              <TableCell>{s.email}</TableCell>
              <TableCell>{s.status}</TableCell>
              <TableCell>
                <Button onClick={() => setSelected(s)}>עריכה</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
}

