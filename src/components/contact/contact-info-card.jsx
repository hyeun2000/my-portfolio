import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import ContactCard from './contact-card';
import { CONTACT_ITEMS } from './contact-data';

/**
 * ContactInfoCard 컴포넌트
 * 이메일·전화·위치를 아이콘 + 텍스트로 정렬해서 보여준다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactInfoCard />
 */
function ContactInfoCard() {
  return (
    <ContactCard emoji="📮" title="연락처" tone="yellow">
      <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        { CONTACT_ITEMS.map(({ id, emoji, icon: Icon, label, value, href }) => (
          <Box component="li" key={ id } sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                flexShrink: 0,
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                bgcolor: 'var(--color-warm-orange)',
                color: 'var(--color-warm-input)',
              }}
            >
              <Icon fontSize="small" />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Box sx={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-warm-text-soft)' }}>
                { label } <span aria-hidden="true">{ emoji }</span>
              </Box>
              { href ? (
                <Link
                  href={ href }
                  underline="hover"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.05rem' },
                    fontWeight: 600,
                    color: 'var(--color-warm-text)',
                    wordBreak: 'break-all',
                  }}
                >
                  { value }
                </Link>
              ) : (
                <Box sx={{ fontSize: { xs: '1rem', md: '1.05rem' }, fontWeight: 600, color: 'var(--color-warm-text)' }}>
                  { value }
                </Box>
              ) }
            </Box>
          </Box>
        )) }
      </Box>
    </ContactCard>
  );
}

export default ContactInfoCard;
