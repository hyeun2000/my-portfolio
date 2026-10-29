import Box from '@mui/material/Box';

/** 일러스트 고정 색상 (라이트/다크 공통, 무채색 없음) */
const INK = '#5a2a0c';
const SKIN = '#ffd0a1';
const KNOCK_DURATION = '1.4s';

/**
 * KnockingHandIcon 컴포넌트
 * 주먹 쥔 손이 문 옆에 있는 아이콘.
 * 부모 요소(.contact-section__title)에 마우스를 올리면 '똑똑' 두 번 노크하고,
 * 문을 두드리는 순간 충격선이 반짝인다.
 *
 * Props:
 * @param {string} size - 아이콘 높이 (부모 글자 크기 기준 em 권장) [Optional, 기본값: '1.15em']
 *
 * Example usage:
 * <Typography className="contact-section__title">똑똑 <KnockingHandIcon /></Typography>
 */
function KnockingHandIcon({ size = '1.15em' }) {
  const isHovered = '.contact-section__title:hover &';

  return (
    <Box
      component="svg"
      viewBox="0 0 48 40"
      aria-hidden="true"
      sx={{
        display: 'inline-block',
        width: `calc(${size} * 1.2)`,
        height: size,
        verticalAlign: '-0.2em',
        overflow: 'visible',
        '& .knock-icon__hand': {
          transformBox: 'view-box',
          transformOrigin: '6px 22px',
        },
        '& .knock-icon__impact': { opacity: 0 },
        [`${isHovered} .knock-icon__hand`]: {
          animation: `knockIconHand ${KNOCK_DURATION} ease-in-out infinite`,
        },
        [`${isHovered} .knock-icon__impact`]: {
          animation: `knockIconImpact ${KNOCK_DURATION} linear infinite`,
        },
        '@keyframes knockIconHand': {
          '0%, 60%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '8%': { transform: 'translateX(-2px) rotate(-6deg)' },
          '16%': { transform: 'translateX(5px) rotate(4deg)' },
          '24%': { transform: 'translateX(-2px) rotate(-6deg)' },
          '32%': { transform: 'translateX(5px) rotate(4deg)' },
          '42%': { transform: 'translateX(0) rotate(0deg)' },
        },
        '@keyframes knockIconImpact': {
          '0%, 14%, 22%, 30%, 40%, 100%': { opacity: 0 },
          '16%, 19%, 32%, 35%': { opacity: 1 },
        },
        '@media (prefers-reduced-motion: reduce)': {
          [`${isHovered} .knock-icon__hand, ${isHovered} .knock-icon__impact`]: { animation: 'none' },
        },
      }}
    >
      { /* 문 (오른쪽) */ }
      <rect x={ 38 } y={ 2 } width={ 9 } height={ 36 } rx={ 2 } fill="var(--color-warm-orange)" stroke={ INK } strokeWidth={ 2 } />
      <circle cx={ 41.5 } cy={ 22 } r={ 1.6 } fill={ INK } />

      { /* 노크 충격선 */ }
      <g className="knock-icon__impact" stroke="var(--color-warm-orange-dark)" strokeWidth={ 2.2 } strokeLinecap="round">
        <path d="M35 9L32 5" />
        <path d="M36 6.5V2" />
        <path d="M35 35L32 39" />
      </g>

      { /* 소매 + 주먹 */ }
      <g className="knock-icon__hand">
        <rect x={ 2 } y={ 15 } width={ 11 } height={ 14 } rx={ 3 } fill="var(--color-warm-yellow)" stroke={ INK } strokeWidth={ 2 } />
        <rect x={ 12 } y={ 11 } width={ 20 } height={ 21 } rx={ 8 } fill={ SKIN } stroke={ INK } strokeWidth={ 2 } />
        { /* 접힌 손가락 마디 */ }
        <path d="M24 16.5H31M24 21.5H32M24 26.5H31" stroke={ INK } strokeWidth={ 1.8 } strokeLinecap="round" />
        { /* 엄지 */ }
        <path d="M14 18Q21 17 23 21Q21 24 15 23.5" fill={ SKIN } stroke={ INK } strokeWidth={ 1.8 } strokeLinejoin="round" />
      </g>
    </Box>
  );
}

export default KnockingHandIcon;
