import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { formatDate } from '../../utils/format-date';
import AiAvatar from './ai-avatar';
import ContactCard from './contact-card';
import { GUEST_AVATARS } from './contact-data';

/**
 * GuestbookList 컴포넌트
 * 방문자들이 남긴 방명록을 AI 캐릭터 아바타와 함께 최신순으로 보여준다.
 *
 * Props:
 * @param {Array} entries - 방명록 목록 ({ id, nickname, sns, message, created_at }) [Required]
 * @param {boolean} isLoading - 불러오는 중인지 여부 [Optional, 기본값: false]
 * @param {string} error - 오류 메시지 [Optional, 기본값: '']
 * @param {boolean} isConfigured - Supabase 연결 여부 [Optional, 기본값: true]
 *
 * Example usage:
 * <GuestbookList entries={ entries } isLoading={ isLoading } />
 */
function GuestbookList({ entries, isLoading = false, error = '', isConfigured = true }) {
  const renderStatus = (text) => (
    <Box sx={{ py: 4, textAlign: 'center', lineHeight: 1.6, color: 'var(--color-warm-text-soft)' }}>
      { text }
    </Box>
  );

  const renderBody = () => {
    if (!isConfigured) return renderStatus('방명록 서버 준비 중이에요 🛠️');
    if (isLoading && entries.length === 0) {
      return (
        <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={ 32 } sx={{ color: 'var(--color-warm-orange)' }} />
        </Box>
      );
    }
    if (error) return renderStatus(`${error} 😢`);
    if (entries.length === 0) return renderStatus('아직 아무도 없어요. 첫 방명록의 주인공이 되어주세요! 🎉');

    return (
      <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        { entries.map(({ id, nickname, sns, message, created_at: createdAt }) => (
          <Box
            component="li"
            key={ id }
            sx={{
              display: 'flex',
              gap: 1.5,
              p: 1.5,
              borderRadius: 3,
              bgcolor: 'var(--color-warm-input)',
              border: '2px dashed var(--color-warm-border)',
            }}
          >
            <AiAvatar avatar={ GUEST_AVATARS[id % GUEST_AVATARS.length] } />
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', columnGap: 1 }}>
                <Box component="strong" sx={{ color: 'var(--color-warm-text)', wordBreak: 'break-all' }}>
                  { nickname }
                </Box>
                { sns && (
                  <Box component="span" sx={{ fontSize: '0.8rem', color: 'var(--color-warm-orange-dark)', wordBreak: 'break-all' }}>
                    { sns }
                  </Box>
                ) }
                <Box component="span" sx={{ ml: 'auto', fontSize: '0.75rem', color: 'var(--color-warm-text-soft)' }}>
                  { formatDate(createdAt) }
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 0.5,
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  color: 'var(--color-warm-text)',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}
              >
                { message }
              </Box>
            </Box>
          </Box>
        )) }
      </Box>
    );
  };

  return (
    <ContactCard emoji="📒" title={ entries.length > 0 ? `방명록 (${entries.length})` : '방명록' } tone="yellow">
      <Box sx={{ maxHeight: { xs: 360, md: 420 }, overflowY: 'auto', pr: 0.5 }}>
        { renderBody() }
      </Box>
    </ContactCard>
  );
}

export default GuestbookList;
