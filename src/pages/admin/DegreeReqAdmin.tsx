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

type DegreeReq = {
  id: string;
  name: string;
  credits: number;
};

const STORAGE_KEY = "degreeRequirements";

const defaultDegreeReqs: DegreeReq[] = [
  { id: "CS", name: "Computer Science", credits: 120 },
  { id: "SE", name: "Software Engineering", credits: 130 },
  { id: "IT", name: "Information Technology", credits: 110 },
];

function DegreeReqAdmin() {
  const [degrees, setDegrees] = useState<DegreeReq[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<DegreeReq | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setDegrees(JSON.parse(data));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDegreeReqs));
      setDegrees(defaultDegreeReqs);
    }
  }, []);

  const saveToStorage = (list: DegreeReq[]) => {
    setDegrees(list);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  };

  const handleAdd = () => {
    setEditing({ id: "", name: "", credits: 0 });
    setOpen(true);
  };

  const handleEdit = (deg: DegreeReq) => {
    setEditing(deg);
    setOpen(true);
  };

  const handleSave = () => {
    if (!editing) return;

    let updated: DegreeReq[];
    const exists = degrees.find((d) => d.id === editing.id);

    if (exists) {
      updated = degrees.map((d) =>
        d.id === editing.id ? editing : d
      );
    } else {
      updated = [...degrees, editing];
    }

    saveToStorage(updated);
    setOpen(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Degree Requirements
      </Typography>

      <Button
        variant="contained"
        onClick={handleAdd}
        sx={{ mb: 2 }}
      >
        Add Degree
      </Button>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Degree Name</TableCell>
              <TableCell>Credits</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {degrees.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.credits}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handleEdit(d)}
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
          {editing?.id ? "Edit Degree" : "Add Degree"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Degree Code"
            fullWidth
            margin="dense"
            value={editing?.id || ""}
            onChange={(e) =>
              setEditing({ ...editing!, id: e.target.value })
            }
            required
          />
          <TextField
            label="Degree Name"
            fullWidth
            margin="dense"
            value={editing?.name || ""}
            onChange={(e) =>
              setEditing({ ...editing!, name: e.target.value })
            }
            required
          />
          <TextField
            label="Total Credits"
            type="number"
            fullWidth
            margin="dense"
            value={editing?.credits || 0}
            onChange={(e) =>
              setEditing({
                ...editing!,
                credits: Number(e.target.value),
              })
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

export default DegreeReqAdmin;
