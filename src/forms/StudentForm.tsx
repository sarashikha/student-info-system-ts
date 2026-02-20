import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Button,
  Dialog,
} from "@mui/material";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";
import StudentForm from "./StudentForm"

export default function StudentsAdmin() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "students"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <LinearProgress />;

  return (
    <Box p={4} dir="rtl">
      <Typography variant="h4" textAlign="right" gutterBottom>
        ניהול סטודנטים
      </Typography>

      <Button
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => setOpen(true)}
      >
        הוסף סטודנט
      </Button>

      <Paper sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">שם</TableCell>
              <TableCell align="right">אימייל</TableCell>
              <TableCell align="right">ת"ז</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id} hover>
                <TableCell align="right">
                  <Link
                    to={`/admin/students/${student.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {student.name}
                  </Link>
                </TableCell>
                <TableCell align="right">{student.email}</TableCell>
                <TableCell align="right">{student.idNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Box p={3} width={400}>
          <StudentForm />
        </Box>
      </Dialog>
    </Box>
  );
}