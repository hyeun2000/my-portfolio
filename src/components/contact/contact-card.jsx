import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** tone별 카드 배경과 살짝 기울어진 각도 */
const CARD_TONES = {
  yellow: { bg: 'var(--color-warm-card)', tilt: '-1deg' },
  orange: { bg: 'var(--color-warm-card-alt)', tilt: '1deg' },
};

/**
 * ContactCard 컴포넌트
 * 이모지 + 제목이 달린 따뜻한 색감의 카드. 마우스를 올리면 살짝 튀어오른다.
 *
 * Props:
 * @param {string} emoji - 제목 앞에 붙는 이모지 [Optional]
 * @param {node} icon - emoji 대신 보여줄 아이콘 (자체 hover 애니메이션을 가진 경우) [Optional]
 * @param {string} title - 카드 제목 [Required]
 * @param {string} tone - 카드 색상 ('yellow' | 'orange') [Optional, 기본값: 'yellow']
 * @param {node} children - 카드 본문 [Required]
 *
 * Example usage:
 * <ContactCard emoji="💌" title="연락처" tone="orange">...</ContactCard>
 */
function ContactCard({ emoji, icon, title, tone = 'yellow', children }) {
  const { bg, tilt } = CARD_TONES[tone] ?? CARD_TONES.yellow;

  return (
    <Box
      className="contact-card"
      sx={{
        height: '100%',
        p: { xs: 2.5, md: 3 },
        borderRadius: 4,
        bgcolor: bg,
        border: '3px solid var(--color-warm-orange)',
        boxShadow: '6px 6px 0 var(--color-warm-orange)',
        transform: { md: `rotate(${tilt})` },
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: { md: 'rotate(0deg) translateY(-4px)' },
          boxShadow: '8px 10px 0 var(--color-warm-orange-dark)',
        },
        '&:hover .contact-card__emoji': {
          transform: 'rotate(-15deg) scale(1.2)',
        },
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
          '&:hover': { transform: 'none' },
        },
      }}
    >
      <Typography
        component="h3"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2,
          fontSize: { xs: '1.15rem', md: '1.3rem' },
          fontWeight: 800,
          lineHeight: 1.3,
          color: 'var(--color-warm-text)',
        }}
      >
        { icon ?? (
          <Box
            component="span"
            className="contact-card__emoji"
            aria-hidden="true"
            sx={{ display: 'inline-block', fontSize: '1.6rem', transition: 'transform 0.25s ease' }}
          >
            { emoji }
          </Box>
        ) }
        { title }
      </Typography>
      { children }
    </Box>
  );
}

export default ContactCard;
