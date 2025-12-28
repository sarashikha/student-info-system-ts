import { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Stack, Typography, Paper } from '@mui/material';
import { Message } from '../../models/Message';
import { storageService } from '../../services/storageService';
import MessageForm from '../../forms/MessageForm';

export default function MessagesAdmin() {
  const [list, setList] = useState<Message[]>([]);
  const [selected, setSelected] = useState<Message>();

  const load = () => {
    setList(storageService.get<Message>('messages'));
    setSelected(undefined);
  };

  useEffect(load, []);

  return (
    <Stack spacing={3}>
      <Typography variant="h4">ניהול הודעות</Typography>

      <Paper sx={{ p: 2 }}>
        <MessageForm selected={selected} onSave={load} />
      </Paper>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>כותרת</TableCell>
            <TableCell>תאריך</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(m => (
            <TableRow key={m.id}>
              <TableCell>{m.title}</TableCell>
              <TableCell>{m.date}</TableCell>
              <TableCell>
                <Button onClick={() => setSelected(m)}>עריכה</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
}
