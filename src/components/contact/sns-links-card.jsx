import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import ContactCard from './contact-card';
import { SNS_LINKS } from './contact-data';

/**
 * SnsLinksCard 컴포넌트
 * SNS 링크를 작은 아이콘 버튼으로 한 줄에 정렬해서 보여준다.
 *
 * Props: 없음
 *
 * Example usage:
 * <SnsLinksCard />
 */
function SnsLinksCard() {
  return (
    <ContactCard emoji="💻" title="SNS에서 만나요" tone="orange">
      <Box sx={{ mb: 2, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.6, color: 'var(--color-warm-text-soft)' }}>
        일상, 작업기록, 가끔은 맛집 사진까지 🍜 편하게 팔로우하고 말 걸어주세요!
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        { SNS_LINKS.map(({ id, label, icon: Icon, href }) => (
          <Tooltip key={ id } title={ label } arrow>
            <IconButton
              component="a"
              href={ href }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ label }
              size="small"
              sx={{
                width: 40,
                height: 40,
                bgcolor: 'var(--color-warm-yellow)',
                color: 'var(--color-warm-text)',
                border: '2px solid var(--color-warm-orange)',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
                '&:hover': {
                  bgcolor: 'var(--color-warm-orange)',
                  transform: 'translateY(-3px) rotate(-8deg)',
                },
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          </Tooltip>
        )) }
      </Box>
    </ContactCard>
  );
}

export default SnsLinksCard;
