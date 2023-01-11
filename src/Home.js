import { buttonTextMain, subtitleMain, titleMain } from './shared/mocks';

import { Box, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import ResponsiveAppBar from './components/Appbar';
import { Section } from './components/Section';

function Home() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Stack>
        <ResponsiveAppBar grayBg />
        <section>
          <Section
            height="415px"
            title={titleMain}
            subtitle={subtitleMain}
            buttonText={buttonTextMain}
            paddingtop="96px"
            bg="primary.grayBg"
          />
        </section>
        <main>
          <Box sx={{ minHeight: '90vh' }}>
            <Typography
              align="center"
              sx={{
                marginTop: '70px',
                fontWeight: 500,
                fontSize: '32px',
                color: 'primary.purple',
              }}
            >
              Concept
            </Typography>
            <Typography
              component="h2"
              variant="h3"
              align="center"
              sx={{
                margin: '18px 0',
                fontWeight: 600,
                fontSize: '60px',
                letterSpacing: '-2%',
              }}
            >
              Robotic bar for your event
            </Typography>
          </Box>
        </main>

        <footer>
          <Typography>Footer</Typography>
        </footer>
      </Stack>
    </Container>
  );
}

export default Home;
