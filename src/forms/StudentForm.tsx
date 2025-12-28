import { useEffect, useState } from 'react';
import { TextField, Button, Stack, Snackbar, MenuItem } from '@mui/material';
import { Student } from '../models/Student';
import { storageService } from '../services/storageService';

interface Props {
  selected?: Student;
  onSave: () => void;
}

export default function StudentForm({ selected, onSave }: Props) {
  const [id, setId] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'פעיל' | 'סיים'>('פעיל');
  const [open, setOpen] = useState(false);

  const students = storageService.get<Student>('students');

  const isDuplicate =
    !selected && students.some(s => s.id === id);

  const valid =
    id.trim() !== '' &&
    fullName.trim() !== '' &&
    email.includes('@') &&
    !isDuplicate;

  useEffect(() => {
    if (selected) {
      setId(selected.id);
      setFullName(selected.fullName);
      setEmail(selected.email);
      setStatus(selected.status);
    }
  }, [selected]);

  const save = () => {
    let list = students;

    if (selected) {
      const i = list.findIndex(s => s.id === selected.id);
      list[i] = { ...selected, fullName, email, status };
    } else {
      list.push({
        id,
        fullName,
        email,
        status,
        courseIds: []
      });
    }

    storageService.set('students', list);
    setOpen(true);
    onSave();
  };

  return (
    <Stack spacing={2}>
      <TextField
        label="תעודת זהות"
        value={id}
        required
        disabled={!!selected}
        error={isDuplicate}
        helperText={isDuplicate ? 'ת״ז כבר קיימת' : ''}
        onChange={e => setId(e.target.value)}
      />

      <TextField
        label="שם מלא"
        value={fullName}
        required
        onChange={e => setFullName(e.target.value)}
      />

      <TextField
        label="אימייל"
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
      />

      <TextField
        select
        label="סטטוס"
        value={status}
        onChange={e => setStatus(e.target.value as any)}
      >
        <MenuItem value="פעיל">פעיל</MenuItem>
        <MenuItem value="סיים">סיים</MenuItem>
      </TextField>

      <Button disabled={!valid} variant="contained" onClick={save}>
        שמירה
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        message="סטודנט נשמר בהצלחה"
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
}
