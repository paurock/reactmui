import Box from '@mui/material/Box';

import { FormControl, Input, InputLabel, Typography } from '@mui/material';

export const Form = () => {
  return (
    <Box
      component="form"
      sx={{
        paddingTop: '96px',
        minWidth: '720px',
        minHeight: '606px',
        textAlign: 'center',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography sx={{ fontWeight: 600, fontSize: '60px' }}>
        Contact
      </Typography>

      <Box
        sx={{
          maxWidth: '512px',
          backgroundColor: 'gray',
          paddingTop: '48px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            paddingTop: '78px',
            fontWeight: 500,
            fontSize: '20px',
            color: 'primary.gray500',
            whiteSpace: 'nowrap',
          }}
        >
          You can reach us anytime via &nbsp;
          <Typography
            component="a"
            sx={{
              paddingTop: '78px',
              fontWeight: 500,
              fontSize: '20px',
              color: 'primary.main',
            }}
          >
            mail@cybermatica.eu
          </Typography>
        </Typography>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input id="component-simple" defaultValue="Composed TextField" />
        </FormControl>
      </Box>
    </Box>
  );
};
