import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/** tone별 색상 조합 (모두 index.css의 CSS 변수 사용) */
const TONE_STYLES = {
  default: {
    bg: 'var(--color-bg-primary)',
    title: 'var(--color-text-strong)',
    text: 'var(--color-text-secondary)',
    label: 'var(--color-text-strong)',
    labelBg: 'var(--color-primary)',
    border: '1px solid var(--color-border)',
    accentBar: 'var(--color-primary)',
  },
  dark: {
    bg: 'var(--color-secondary)',
    title: 'var(--color-text-on-dark)',
    text: '#e6e6e6',
    label: '#000000',
    labelBg: 'var(--color-primary)',
    border: 'none',
    accentBar: 'var(--color-primary)',
  },
  tint: {
    bg: 'var(--color-primary-light)',
    title: 'var(--color-text-strong)',
    text: 'var(--color-text-secondary)',
    label: 'var(--color-text-on-dark)',
    labelBg: 'var(--color-secondary)',
    border: '1px solid var(--color-primary)',
    accentBar: 'var(--color-primary)',
  },
  muted: {
    bg: 'var(--color-bg-secondary)',
    title: 'var(--color-text-strong)',
    text: 'var(--color-text-secondary)',
    label: 'var(--color-text-on-dark)',
    labelBg: 'var(--color-accent)',
    border: 'none',
    accentBar: 'var(--color-accent)',
  },
  accent: {
    bg: 'var(--color-accent)',
    title: '#ffffff',
    text: '#ffffff',
    label: '#000000',
    labelBg: 'var(--color-primary)',
    border: 'none',
    accentBar: 'var(--color-primary)',
  },
};

/**
 * SectionCard 컴포넌트
 * 섹션 번호 라벨, 제목, 설명 텍스트를 컬러 팔레트 tone에 맞춰 보여주는 카드
 *
 * Props:
 * @param {string} label - 제목 위에 표시할 짧은 라벨 (예: '01') [Required]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 설명 텍스트 [Required]
 * @param {string} tone - 색상 조합 ('default' | 'dark' | 'tint' | 'muted' | 'accent') [Optional, 기본값: 'default']
 * @param {string} id - 섹션 앵커용 id [Optional]
 * @param {node} children - 설명 아래에 추가로 보여줄 내용 (버튼 등) [Optional]
 *
 * Example usage:
 * <SectionCard label="01" title="Hero" description="소개 문구" tone="dark" />
 */
function SectionCard({ label, title, description, tone = 'default', id, children }) {
  const colors = TONE_STYLES[tone] ?? TONE_STYLES.default;

  return (
    <Card
      component="section"
      id={ id }
      elevation={ 0 }
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: colors.bg,
        border: colors.border,
        borderRadius: 2,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: { xs: 4, md: 6 },
          height: '100%',
          bgcolor: colors.accentBar,
        },
      }}
    >
      <CardContent sx={{ px: { xs: 3, md: 5 }, py: { xs: 4, md: 6 } }}>
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
            color: colors.label,
            bgcolor: colors.labelBg,
          }}
        >
          { label }
        </Box>
        <Typography
          component="h2"
          sx={{
            mb: 1.5,
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            lineHeight: 1.3,
            color: colors.title,
          }}
        >
          { title }
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
            color: colors.text,
          }}
        >
          { description }
        </Typography>
        { children && <Box sx={{ mt: 3 }}>{ children }</Box> }
      </CardContent>
    </Card>
  );
}

export default SectionCard;
