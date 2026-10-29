import Box from '@mui/material/Box';

/** 연필이 지나가는 필기 궤적 (봉우리 4개, 연필 이동 거리 32) */
const SCRIBBLE_PATH = 'M4 32q4 -6 8 0t8 0t8 0t8 0';
const WRITE_DURATION = '1.8s';

/**
 * WritingPencilIcon 컴포넌트
 * 연필 아이콘. 부모 ContactCard(.contact-card)에 마우스를 올리면
 * 연필이 물결 모양으로 움직이며 글씨를 써 내려가는 애니메이션이 재생된다.
 *
 * Props:
 * @param {number} size - 아이콘 높이(px), 너비는 비율에 맞춰 자동 [Optional, 기본값: 30]
 *
 * Example usage:
 * <ContactCard icon={ <WritingPencilIcon /> } title="방명록 남기기" />
 */
function WritingPencilIcon({ size = 30 }) {
  const isHovered = '.contact-card:hover &';

  return (
    <Box
      component="svg"
      viewBox="0 0 60 40"
      aria-hidden="true"
      sx={{
        width: size * 1.5,
        height: size,
        flexShrink: 0,
        display: 'block',
        overflow: 'visible',
        '& .pencil-icon__line': {
          strokeDasharray: 100,
          strokeDashoffset: 0,
        },
        '& .pencil-icon__move': {
          transform: 'translate(32px, 0)',
        },
        [`${isHovered} .pencil-icon__line`]: {
          animation: `pencilIconDraw ${WRITE_DURATION} linear infinite`,
        },
        [`${isHovered} .pencil-icon__move`]: {
          animation: `pencilIconWrite ${WRITE_DURATION} linear infinite`,
        },
        '@keyframes pencilIconDraw': {
          '0%': { strokeDashoffset: 100 },
          '80%, 92%': { strokeDashoffset: 0 },
          '100%': { strokeDashoffset: 100 },
        },
        '@keyframes pencilIconWrite': {
          '0%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(4px, -3px)' },
          '20%': { transform: 'translate(8px, 0)' },
          '30%': { transform: 'translate(12px, 3px)' },
          '40%': { transform: 'translate(16px, 0)' },
          '50%': { transform: 'translate(20px, -3px)' },
          '60%': { transform: 'translate(24px, 0)' },
          '70%': { transform: 'translate(28px, 3px)' },
          '80%': { transform: 'translate(32px, 0)' },
          '90%': { transform: 'translate(32px, -5px)' },
          '100%': { transform: 'translate(0, -2px)' },
        },
        '@media (prefers-reduced-motion: reduce)': {
          [`${isHovered} .pencil-icon__line, ${isHovered} .pencil-icon__move`]: { animation: 'none' },
        },
      }}
    >
      <path
        className="pencil-icon__line"
        d={ SCRIBBLE_PATH }
        pathLength={ 100 }
        fill="none"
        stroke="var(--color-warm-orange-dark)"
        strokeWidth={ 2.6 }
        strokeLinecap="round"
      />
      <g className="pencil-icon__move">
        { /* 연필 끝(심)이 필기 궤적 시작점 (4, 32)에 오도록 배치하고 오른쪽 위로 기울임 */ }
        <g transform="translate(4 32) rotate(-40)">
          <polygon points="0,0 7,-4 7,4" fill="var(--color-warm-input)" stroke="var(--color-warm-text)" strokeWidth={ 1.6 } strokeLinejoin="round" />
          <polygon points="0,0 2.6,-1.5 2.6,1.5" fill="var(--color-warm-text)" />
          <rect x={ 7 } y={ -4 } width={ 14 } height={ 8 } fill="var(--color-warm-yellow)" stroke="var(--color-warm-text)" strokeWidth={ 1.6 } />
          <rect x={ 21 } y={ -4 } width={ 3 } height={ 8 } fill="var(--color-warm-orange)" stroke="var(--color-warm-text)" strokeWidth={ 1.6 } />
          <rect x={ 24 } y={ -4 } width={ 5 } height={ 8 } rx={ 2 } fill="#ff6f59" stroke="var(--color-warm-text)" strokeWidth={ 1.6 } />
        </g>
      </g>
    </Box>
  );
}

export default WritingPencilIcon;
