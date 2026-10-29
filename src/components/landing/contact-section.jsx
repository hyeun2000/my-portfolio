import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useGuestbook from '../../hooks/use-guestbook';
import ContactInfoCard from '../contact/contact-info-card';
import KnockingHandIcon from '../contact/knocking-hand-icon';
import GuestbookForm from '../contact/guestbook-form';
import GuestbookList from '../contact/guestbook-list';
import SnsLinksCard from '../contact/sns-links-card';

/**
 * ContactSection 컴포넌트
 * Home 페이지의 Contact 섹션.
 * 연락처 / SNS (윗줄), 방명록 작성 / 방명록 목록 (아랫줄)을 좌우 2개씩 배치한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  const { entries, isLoading, error, isConfigured, addEntry } = useGuestbook();

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2.5, md: 5 },
        py: { xs: 4, md: 6 },
        borderRadius: 2,
        bgcolor: 'var(--color-warm-bg)',
        backgroundImage: 'radial-gradient(var(--color-warm-border) 1.5px, transparent 1.5px)',
        backgroundSize: '22px 22px',
      }}
    >
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          px: 1.5,
          py: 0.5,
          mb: 2,
          borderRadius: 1,
          fontSize: { xs: '0.75rem', md: '0.8rem' },
          fontWeight: 700,
          letterSpacing: '0.08em',
          color: 'var(--color-warm-text)',
          bgcolor: 'var(--color-warm-yellow)',
        }}
      >
        05 · CONTACT
      </Box>
      <Typography
        component="h2"
        className="contact-section__title"
        sx={{
          mb: 1,
          fontSize: { xs: '1.6rem', md: '2.2rem' },
          fontWeight: 800,
          lineHeight: 1.3,
          color: 'var(--color-warm-text)',
        }}
      >
        똑똑, 놀러오세요! <KnockingHandIcon />
      </Typography>
      <Typography
        sx={{
          mb: { xs: 3, md: 5 },
          fontSize: { xs: '1rem', md: '1.1rem' },
          lineHeight: 1.6,
          color: 'var(--color-warm-text-soft)',
        }}
      >
        협업 제안, 사소한 질문, 응원 한마디 모두 환영이에요 🌻 방명록에 흔적을 남겨주시면 꼭 읽을게요!
      </Typography>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ContactInfoCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SnsLinksCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <GuestbookForm onSubmit={ addEntry } isDisabled={ !isConfigured } />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <GuestbookList
            entries={ entries }
            isLoading={ isLoading }
            error={ error }
            isConfigured={ isConfigured }
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactSection;
