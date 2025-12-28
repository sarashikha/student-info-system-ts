import { useEffect, useState } from 'react';
import { TextField, Button, Stack, Snackbar } from '@mui/material';
import { Admin } from '../models/Admin';
import { storageService } from '../services/storageService';

interface Props {
  selected?: Admin;
  onSave: () => void;
}

export default function AdminForm({ selected, onSave }: Props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [open, setOpen] = useState(false);

  const valid =
    fullName.trim() !== '' &&
    email.includes('@');

  useEffect(() => {
    if (selected) {
      setFullName(selected.fullName);
      setEmail(selected.email);
      setRole(selected.role);
    }
  }, [selected]);

  const save = () => {
    const list = storageService.get<Admin>('admins');

    if (selected) {
      const i = list.findIndex(a => a.id === selected.id);
      list[i] = { ...selected, fullName, email, role };
    } else {
      list.push({
        id: Date.now().toString(),
        fullName,
        email,
        role
      });
    }

    storageService.set('admins', list);
    setOpen(true);
    onSave();
  };

  return (
    <Stack spacing={2}>
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
        label="תפקיד"
        value={role}
        onChange={e => setRole(e.target.value)}
      />

      <Button disabled={!valid} variant="contained" onClick={save}>
        שמירה
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        message="מנהל נשמר בהצלחה"
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
}

