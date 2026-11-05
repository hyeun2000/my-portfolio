import Box from '@mui/material/Box';

/**
 * TechStackBadges 컴포넌트
 * 기술 스택 배열을 둥근 알약(pill) 모양 뱃지로 나열한다.
 *
 * Props:
 * @param {Array<string>} items - 기술 스택 이름 목록 [Required]
 * @param {string} toneSoft - 뱃지 배경 파스텔 색 [Required]
 * @param {string} toneMain - 뱃지 글자 색 [Required]
 *
 * Example usage:
 * <TechStackBadges items={ ['React', 'Supabase'] } toneSoft="#e3f6ee" toneMain="#1d7a52" />
 */
function TechStackBadges({ items, toneSoft, toneMain }) {
  if (!items?.length) return null;

  return (
    <Box
      component="ul"
      aria-label="기술 스택"
      sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 0.75 }}
    >
      { items.map((item) => (
        <Box
          component="li"
          key={ item }
          sx={{
            px: 1.25,
            py: 0.4,
            borderRadius: 999,
            fontSize: '0.75rem',
            fontWeight: 600,
            lineHeight: 1.4,
            color: toneMain,
            bgcolor: toneSoft,
          }}
        >
          { item }
        </Box>
      )) }
    </Box>
  );
}

export default TechStackBadges;
