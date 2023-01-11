import {
  subtitleTeam,
  titleTeam,
  subtitle2Team,
  title2Team,
} from './shared/mocks';

import { Box, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import ResponsiveAppBar from './components/Appbar';
import { TeamGallery } from './components/TeamGallery';
import { Section } from './components/Section';

function Team() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Stack>
        <ResponsiveAppBar />
        <section>
          <Section
            title={titleTeam}
            subtitle={subtitleTeam}
            paddingtop="64px"
          />
        </section>
        <main>
          <Box
            sx={{
              display: 'flex',
              minHeight: '90vh',
              justifyContent: 'center',
            }}
          >
            <TeamGallery />
          </Box>

          <section>
            <Section
              title={title2Team}
              subtitle={subtitle2Team}
              bg="primary.grayBg"
              gap="70px"
            />
          </section>
        </main>
      </Stack>
    </Container>
  );
}

export default Team;
