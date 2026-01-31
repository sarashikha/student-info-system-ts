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

type Course = {
  code: string;
  name: string;
  status: string;
};

const STORAGE_KEY = "courses";

const defaultCourses: Course[] = [
  { code: "CS101", name: "Intro to Computer Science", status: "Active" },
  { code: "CS102", name: "Data Structures", status: "Active" },
  { code: "CS103", name: "Databases", status: "Inactive" },
];

function CoursesAdmin() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Course | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setCourses(JSON.parse(data));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultCourses));
      setCourses(defaultCourses);
    }
  }, []);

  const saveToStorage = (list: Course[]) => {
    setCourses(list);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  };

  const handleAdd = () => {
    setEditing({ code: "", name: "", status: "" });
    setOpen(true);
  };

  const handleEdit = (course: Course) => {
    setEditing(course);
    setOpen(true);
  };

  const handleSave = () => {
    if (!editing) return;

    let updated: Course[];
    const exists = courses.find((c) => c.code === editing.code);

    if (exists) {
      updated = courses.map((c) =>
        c.code === editing.code ? editing : c
      );
    } else {
      updated = [...courses, editing];
    }

    saveToStorage(updated);
    setOpen(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Courses Management
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        sx={{ mb: 2 }}
      >
        Add Course
      </Button>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.code}>
                <TableCell>{course.code}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.status}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handleEdit(course)}
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
          {editing?.code ? "Edit Course" : "Add Course"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Course Code"
            fullWidth
            margin="dense"
            value={editing?.code || ""}
            onChange={(e) =>
              setEditing({ ...editing!, code: e.target.value })
            }
            disabled={!!courses.find((c) => c.code === editing?.code)}
            required
          />
          <TextField
            label="Course Name"
            fullWidth
            margin="dense"
            value={editing?.name || ""}
            onChange={(e) =>
              setEditing({ ...editing!, name: e.target.value })
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

export default CoursesAdmin;