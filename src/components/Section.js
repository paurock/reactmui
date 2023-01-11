import { Button, Stack, Typography } from '@mui/material';

export const Section = ({
  title,
  subtitle,
  buttonText,
  paddingtop = '50px',
  bg,
  gap = '24px',
  height = '400px',
  link = '/',
}) => {
  return (
    <Stack
      sx={{
        bgcolor: bg,
        minHeight: height,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: paddingtop,
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        sx={{
          fontSize: '60px',
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: '20px',
          margin: '24px 0',
          maxWidth: '770px',
          marginTop: gap,
        }}
      >
        {subtitle}
      </Typography>
      {buttonText && (
        <Button
          onClick={() => {
            window.location.href = link;
          }}
          variant="outlined"
          sx={{
            borderWidth: 2,
            borderStyle: 'solid ',
            borderColor: 'primary.gray300',
            backgroundColor: 'primary.white',
            maxWidth: '183px',
            maxHeight: '60px',
            margin: '24px 0 55px 0',
            padding: '16px 28px',
            whiteSpace: 'nowrap',
          }}
        >
          <Typography sx={{ color: 'primary.gray700', fontSize: '18px' }}>
            {buttonText}
          </Typography>
        </Button>
      )}
    </Stack>
  );
};
