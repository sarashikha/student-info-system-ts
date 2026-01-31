import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

type Student = {
  id: string;
  name: string;
  email: string;
  status: string;
};

const STORAGE_KEY = "students";

const defaultStudents: Student[] = [
  { id: "123456789", name: "Ali Ahmad", email: "ali@gmail.com", status: "Active" },
  { id: "987654321", name: "Sara Cohen", email: "sara@gmail.com", status: "Active" },
  { id: "456789123", name: "Noor Hassan", email: "noor@gmail.com", status: "Inactive" },
];

function StudentsAdmin() {
  const [students, setStudents] = useState<Student[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Student | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setStudents(JSON.parse(data));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultStudents));
      setStudents(defaultStudents);
    }
  }, []);

  const saveToStorage = (list: Student[]) => {
    setStudents(list);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  };

  const handleAdd = () => {
    setEditing({ id: "", name: "", email: "", status: "" });
    setOpen(true);
  };

  const handleEdit = (student: Student) => {
    setEditing(student);
    setOpen(true);
  };

  const handleSave = () => {
    if (!editing) return;

    let updated: Student[];
    const exists = students.find((s) => s.id === editing.id);

    if (exists) {
      updated = students.map((s) =>
        s.id === editing.id ? editing : s
      );
    } else {
      updated = [...students, editing];
    }

    saveToStorage(updated);
    setOpen(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Students Management
      </Typography>

      <Button
        variant="contained"
        onClick={handleAdd}
        sx={{ mb: 2 }}
      >
        Add Student
      </Button>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map((s) => (
              <TableRow key={s.id}>
                <TableCell>{s.id}</TableCell>
                <TableCell>{s.name}</TableCell>
                <TableCell>{s.email}</TableCell>
                <TableCell>{s.status}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handleEdit(s)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>
          {editing?.id ? "Edit Student" : "Add Student"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="ID"
            fullWidth
            margin="dense"
            value={editing?.id || ""}
            onChange={(e) =>
              setEditing({ ...editing!, id: e.target.value })
            }
            disabled={!!students.find((s) => s.id === editing?.id)}
            required
          />
          <TextField
            label="Full Name"
            fullWidth
            margin="dense"
            value={editing?.name || ""}
            onChange={(e) =>
              setEditing({ ...editing!, name: e.target.value })
            }
            required
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={editing?.email || ""}
            onChange={(e) =>
              setEditing({ ...editing!, email: e.target.value })
            }
            required
          />
          <TextField
            label="Status"
            fullWidth
            margin="dense"
            value={editing?.status || ""}
            onChange={(e) =>
              setEditing({ ...editing!, status: e.target.value })
            }
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default StudentsAdmin;