import { ReactNode } from 'react';
import { useMediaQuery, Typography, Box } from '@mui/material';

interface Props {
  children: ReactNode;
}

export default function AdminDesktopGuard({ children }: Props) {
  const isDesktop = useMediaQuery('(min-width:900px)');

  if (!isDesktop) {
    return (
      <Box p={3}>
        <Typography color="error">
          Admin screens are available on desktop only
        </Typography>
      </Box>
    );
  }

  return <>{children}</>;
}
