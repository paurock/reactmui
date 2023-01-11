import * as React from 'react';

import { Container, Stack } from '@mui/material';
import ResponsiveAppBar from './Appbar';
import { Form } from './Form';

export default function ContactForm() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Stack sx={{ display: 'flex', alignItems: 'center' }}>
        <ResponsiveAppBar grayBg />
        <Form />
      </Stack>
    </Container>
  );
}
