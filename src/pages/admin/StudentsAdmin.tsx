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
} from "@mui/material";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebase";
import { Link } from "react-router-dom";

export default function StudentsAdmin() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
    </Box>
  );
}