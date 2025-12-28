import { useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Stack,
  MenuItem,
  Snackbar,
  Alert
} from '@mui/material';
import { Course } from '../models/Course';
import { storageService } from '../services/storageService';

interface Props {
  selectedCourse?: Course;
  onSave: () => void;
}

export default function CourseForm({ selectedCourse, onSave }: Props) {
  const [course, setCourse] = useState<Course>({
    id: '',
    name: '',
    syllabus: '',
    status: 'active'
  });

  const [errors, setErrors] = useState({
    id: '',
    name: ''
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [selectedCourse]);

  const validate = () => {
    const newErrors = { id: '', name: '' };
    let valid = true;

    if (!course.id.trim()) {
      newErrors.id = 'קוד קורס הוא שדה חובה';
      valid = false;
    } else {
      const courses = storageService.get<Course>('courses');
      const exists = courses.some(
        c => c.id === course.id && c.id !== selectedCourse?.id
      );
      if (exists) {
        newErrors.id = 'קוד קורס כבר קיים';
        valid = false;
      }
    }

    if (!course.name.trim()) {
      newErrors.name = 'שם קורס הוא שדה חובה';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    if (selectedCourse) {
      storageService.update<Course>('courses', course);
    } else {
      storageService.add<Course>('courses', course);
    }

    setSuccess(true);
    onSave();

    setCourse({
      id: '',
      name: '',
      syllabus: '',
      status: 'active'
    });
  };

  return (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <TextField
        label="קוד קורס"
        value={course.id}
        required
        error={!!errors.id}
        helperText={errors.id}
        onChange={e => setCourse({ ...course, id: e.target.value })}
        disabled={!!selectedCourse}
      />

      <TextField
        label="שם קורס"
        value={course.name}
        required
        error={!!errors.name}
        helperText={errors.name}
        onChange={e => setCourse({ ...course, name: e.target.value })}
      />

      <TextField
        label="סילבוס"
        value={course.syllabus}
        multiline
        rows={3}
        onChange={e => setCourse({ ...course, syllabus: e.target.value })}
      />

      <TextField
        select
        label="סטטוס"
        value={course.status}
        onChange={e =>
          setCourse({ ...course, status: e.target.value as any })
        }
      >
        <MenuItem value="active">פעיל</MenuItem>
        <MenuItem value="inactive">לא פעיל</MenuItem>
      </TextField>

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!course.id || !course.name}
      >
        שמירה
      </Button>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success">הקורס נשמר בהצלחה</Alert>
      </Snackbar>
    </Stack>
  );
}

