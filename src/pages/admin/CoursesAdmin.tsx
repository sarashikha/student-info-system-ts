import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  Typography
} from '@mui/material';
import { Course } from '../../models/Course';
import { storageService } from '../../services/storageService';
import CourseForm from '../../forms/CourseForm';

export default function CoursesAdmin() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>();

  const loadCourses = () => {
    setCourses(storageService.get<Course>('courses'));
    setSelectedCourse(undefined);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <Stack spacing={3} sx={{ p: 3 }}>
      <Typography variant="h5">ניהול קורסים</Typography>

      <CourseForm
        selectedCourse={selectedCourse}
        onSave={loadCourses}
      />

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>קוד</TableCell>
              <TableCell>שם</TableCell>
              <TableCell>סטטוס</TableCell>
              <TableCell>פעולות</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {courses.map(course => (
              <TableRow key={course.id}>
                <TableCell>{course.id}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.status}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    onClick={() => setSelectedCourse(course)}
                  >
                    עריכה
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {courses.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  אין קורסים להצגה
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Stack>
  );
}

