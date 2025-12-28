import { useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Stack,
  Typography,
  Paper
} from '@mui/material';
import DegreeReqForm from '../../forms/DegreeReqForm';
import { DegreeRequirement } from '../../models/DegreeRequirement';
import { storageService } from '../../services/storageService';

export default function DegreeReqAdmin() {
  const [list, setList] = useState<DegreeRequirement[]>([]);
  const [selected, setSelected] = useState<DegreeRequirement | undefined>();

  const loadData = () => {
    setList(storageService.get<DegreeRequirement>('degreeReqs'));
    setSelected(undefined);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Stack spacing={3}>
      <Typography variant="h4">ניהול דרישות תואר</Typography>

      <Paper sx={{ p: 2 }}>
        <DegreeReqForm selected={selected} onSave={loadData} />
      </Paper>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>שם</TableCell>
            <TableCell>סוג</TableCell>
            <TableCell>פעולות</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {list.map(req => (
            <TableRow key={req.id}>
              <TableCell>{req.name}</TableCell>
              <TableCell>{req.type}</TableCell>
              <TableCell>
                <Button onClick={() => setSelected(req)}>עריכה</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
}

