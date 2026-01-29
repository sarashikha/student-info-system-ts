import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function CourseEdit() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Typography color="error">Course not found</Typography>;
  }

  return <Typography>Edit course ID: {id}</Typography>;
}
