import Box from '@mui/material/Box';

/** 일러스트 고정 색상 (라이트/다크 공통, 무채색 없음) */
const INK = '#5a2a0c';
const SKIN = '#ffd0a1';
const SKIN_SHADE = '#f5b47e';
const NAIL = '#ffe8d1';
const KNOCK_DURATION = '1.4s';

/** 접힌 손가락 4개 (위에서부터 검지·중지·약지·새끼), 오른쪽 끝이 손가락 마디 */
const FINGERS = [
  { x: 25, y: 31.5, width: 15, height: 6.5 },
  { x: 26, y: 25, width: 17.5, height: 7 },
  { x: 26, y: 18, width: 18.5, height: 7.5 },
  { x: 26, y: 11, width: 17, height: 7.5 },
];

/**
 * KnockingHandIcon 컴포넌트
 * 손가락 마디와 엄지가 보이는 노크하는 손 + 문 아이콘.
 * 부모 요소(.contact-section__title)에 마우스를 올리면 '똑똑' 두 번 노크하고,
 * 문을 두드리는 순간 충격선이 반짝인다.
 *
 * Props:
 * @param {string} size - 아이콘 높이 (부모 글자 크기 기준 em 권장) [Optional, 기본값: '1.5em']
 *
 * Example usage:
 * <Typography className="contact-section__title">똑똑 <KnockingHandIcon /></Typography>
 */
function KnockingHandIcon({ size = '1.5em' }) {
  const isHovered = '.contact-section__title:hover &';

  return (
    <Box
      component="svg"
      viewBox="0 0 60 48"
      aria-hidden="true"
      sx={{
        display: 'inline-block',
        width: `calc(${size} * 1.25)`,
        height: size,
        verticalAlign: '-0.35em',
        overflow: 'visible',
        '& .knock-icon__hand': {
          transformBox: 'view-box',
          transformOrigin: '8px 27px',
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
          '8%': { transform: 'translateX(-2px) rotate(-7deg)' },
          '16%': { transform: 'translateX(5.5px) rotate(3deg)' },
          '24%': { transform: 'translateX(-2px) rotate(-7deg)' },
          '32%': { transform: 'translateX(5.5px) rotate(3deg)' },
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
      <rect x={ 50 } y={ 1 } width={ 9 } height={ 46 } rx={ 2 } fill="var(--color-warm-orange)" stroke={ INK } strokeWidth={ 2 } />
      <circle cx={ 53.5 } cy={ 26 } r={ 1.8 } fill={ INK } />

      { /* 노크 충격선 */ }
      <g className="knock-icon__impact" stroke="var(--color-warm-orange-dark)" strokeWidth={ 2.2 } strokeLinecap="round">
        <path d="M47 8L44 4" />
        <path d="M48.5 5V0.5" />
        <path d="M47 41L44 45" />
      </g>

      <g className="knock-icon__hand" strokeLinejoin="round">
        { /* 소매 */ }
        <rect x={ 1 } y={ 17 } width={ 11 } height={ 20 } rx={ 3.5 } fill="var(--color-warm-yellow)" stroke={ INK } strokeWidth={ 2 } />
        <path d="M8.5 18.5V35.5" stroke={ INK } strokeWidth={ 1.4 } strokeLinecap="round" opacity={ 0.5 } />
        { /* 손등 + 손목 */ }
        <path d="M11 20C16 18 22 14 30 12L36 12L36 39C28 40 20 38 11 35Z" fill={ SKIN } stroke={ INK } strokeWidth={ 2 } />
        <path d="M14 33C19 35 24 36 28 36" stroke={ SKIN_SHADE } strokeWidth={ 2.4 } strokeLinecap="round" fill="none" />
        { /* 접힌 손가락 + 마디 주름 */ }
        { FINGERS.map(({ x, y, width, height }) => (
          <g key={ y }>
            <rect x={ x } y={ y } width={ width } height={ height } rx={ height / 2 } fill={ SKIN } stroke={ INK } strokeWidth={ 1.8 } />
            <path
              d={ `M${x + width - 6} ${y + 1.8}Q${x + width - 4.6} ${y + height / 2} ${x + width - 6} ${y + height - 1.8}` }
              stroke={ INK }
              strokeWidth={ 1.2 }
              strokeLinecap="round"
              fill="none"
              opacity={ 0.6 }
            />
          </g>
        )) }
        { /* 엄지 + 손톱 */ }
        <path d="M17 28C21 22.5 29 20 36 20.8C39.2 21.2 39.6 25 37 26C31 27.6 24 29.4 18.5 31.5Z" fill={ SKIN } stroke={ INK } strokeWidth={ 1.8 } />
        <path d="M32.6 21.6C35.4 21.3 37.6 22 37.6 23.6C37.6 25 35.6 25.3 33.2 25.2C32.4 24 32.2 22.8 32.6 21.6Z" fill={ NAIL } stroke={ INK } strokeWidth={ 1.1 } />
      </g>
    </Box>
  );
}

export default KnockingHandIcon;
