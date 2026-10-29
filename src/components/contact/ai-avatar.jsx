import { useId } from 'react';
import Box from '@mui/material/Box';

/** 아바타 일러스트 전용 색상 (무채색 없이 주황·노랑 계열, 라이트/다크 공통) */
const INK = '#5a2a0c';
const CREAM = '#fff8ea';
const CHEEK = '#ff6f59';
const BULB = '#ffe27a';

/** 말풍선 몸통 모양 */
const BUBBLE_PATHS = {
  round: 'M38 20H62A22 22 0 0 1 84 42V52A22 22 0 0 1 62 74H44L27 88L30 71A22 22 0 0 1 16 52V42A22 22 0 0 1 38 20Z',
  circle: 'M50 16A30 30 0 1 1 36 72.5L23 87L28 66A30 30 0 0 1 50 16Z',
};

const STROKE = { stroke: INK, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };

/** 하트 path 좌표 */
function heartPath(cx, cy, s) {
  return `M${cx} ${cy + s * 0.9}C${cx - s * 1.6} ${cy - s * 0.2} ${cx - s * 0.6} ${cy - s * 1.3} ${cx} ${cy - s * 0.4}`
    + `C${cx + s * 0.6} ${cy - s * 1.3} ${cx + s * 1.6} ${cy - s * 0.2} ${cx} ${cy + s * 0.9}Z`;
}

/** 별 polygon 좌표 */
function starPoints(cx, cy, r) {
  return Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.45;
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    return `${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');
}

/** 4갈래 반짝이 path 좌표 */
function sparklePath(cx, cy, r) {
  return `M${cx} ${cy - r}Q${cx} ${cy} ${cx + r} ${cy}Q${cx} ${cy} ${cx} ${cy + r}`
    + `Q${cx} ${cy} ${cx - r} ${cy}Q${cx} ${cy} ${cx} ${cy - r}Z`;
}

/** 눈 모양 그리기 (y=43, 왼쪽 x=40, 오른쪽 x=60) */
function renderEyes(type) {
  const y = 43;
  const dot = (x) => (
    <g key={ x }>
      <circle cx={ x } cy={ y } r={ 4.5 } fill={ INK } />
      <circle cx={ x + 1.5 } cy={ y - 1.5 } r={ 1.4 } fill={ CREAM } />
    </g>
  );
  const happy = (x) => <path key={ x } d={ `M${x - 5} ${y + 2}Q${x} ${y - 5} ${x + 5} ${y + 2}` } strokeWidth={ 3.6 } { ...STROKE } />;

  switch (type) {
    case 'happy':
      return [happy(40), happy(60)];
    case 'wink':
      return [dot(40), happy(60)];
    case 'heart':
      return [40, 60].map((x) => <path key={ x } d={ heartPath(x, y, 4.6) } fill={ INK } />);
    case 'star':
      return [40, 60].map((x) => <polygon key={ x } points={ starPoints(x, y, 6) } fill={ INK } />);
    case 'sleepy':
      return [40, 60].map((x) => <path key={ x } d={ `M${x - 5} ${y}Q${x} ${y + 4} ${x + 5} ${y}` } strokeWidth={ 3.6 } { ...STROKE } />);
    case 'big':
      return [40, 60].map((x) => (
        <g key={ x }>
          <circle cx={ x } cy={ y } r={ 6.2 } fill={ INK } />
          <circle cx={ x + 2 } cy={ y - 2 } r={ 2.2 } fill={ CREAM } />
        </g>
      ));
    case 'excited':
      return [
        <path key="l" d={ `M36 ${y - 4.5}L43.5 ${y}L36 ${y + 4.5}` } strokeWidth={ 3.6 } { ...STROKE } />,
        <path key="r" d={ `M64 ${y - 4.5}L56.5 ${y}L64 ${y + 4.5}` } strokeWidth={ 3.6 } { ...STROKE } />,
      ];
    default:
      return [dot(40), dot(60)];
  }
}

/** 입 모양 그리기 (기준 y=53) */
function renderMouth(type) {
  switch (type) {
    case 'grin':
      return <path d="M43 53L57 53Q57 61 50 61Q43 61 43 53Z" fill={ INK } />;
    case 'o':
      return <ellipse cx={ 50 } cy={ 55 } rx={ 3.2 } ry={ 3.8 } fill={ INK } />;
    case 'cat':
      return <path d="M43 53Q46.5 58 50 53Q53.5 58 57 53" strokeWidth={ 3.2 } { ...STROKE } />;
    case 'dots':
      return [42, 50, 58].map((x) => <circle key={ x } cx={ x } cy={ 55 } r={ 2.8 } fill={ INK } />);
    case 'tongue':
      return (
        <>
          <path d="M44 53Q50 59 56 53" strokeWidth={ 3.2 } { ...STROKE } />
          <path d="M49 56.6Q52 62 55 56" fill={ CHEEK } stroke={ INK } strokeWidth={ 1.6 } />
        </>
      );
    default:
      return <path d="M44 53Q50 59 56 53" strokeWidth={ 3.2 } { ...STROKE } />;
  }
}

/** 오른쪽 위 장식 그리기 */
function renderExtra(type, accent) {
  switch (type) {
    case 'sparkle':
      return (
        <>
          <path d={ sparklePath(85, 18, 8) } fill={ accent } />
          <path d={ sparklePath(14, 20, 4.5) } fill={ accent } />
        </>
      );
    case 'heart':
      return <path d={ heartPath(84, 17, 7) } fill={ accent } />;
    case 'bulb':
      return (
        <>
          <circle cx={ 84 } cy={ 16 } r={ 7 } fill={ BULB } stroke={ INK } strokeWidth={ 2.2 } />
          <rect x={ 80.5 } y={ 22 } width={ 7 } height={ 5 } rx={ 1.5 } fill={ INK } />
          <path d="M73 9l-3-3M84 5V1M95 9l3-3" strokeWidth={ 2 } { ...STROKE } />
        </>
      );
    case 'note':
      return (
        <>
          <path d="M80 26V10l10-3v14" strokeWidth={ 2.4 } { ...STROKE } />
          <ellipse cx={ 77.5 } cy={ 26 } rx={ 3.5 } ry={ 2.8 } fill={ INK } />
          <ellipse cx={ 87.5 } cy={ 21 } rx={ 3.5 } ry={ 2.8 } fill={ INK } />
        </>
      );
    default:
      return null;
  }
}

/**
 * AiAvatar 컴포넌트
 * 챗봇 말풍선 컨셉의 AI 캐릭터를 SVG로 그린다. (기기와 상관없이 같은 모양)
 *
 * Props:
 * @param {object} avatar - 캐릭터 설정 ({ name, bg, body, accent, shape, eyes, mouth, extra, hasAntenna }) [Required]
 * @param {number} size - 가로·세로 크기(px) [Optional, 기본값: 40]
 *
 * Example usage:
 * <AiAvatar avatar={ GUEST_AVATARS[0] } size={ 40 } />
 */
function AiAvatar({ avatar, size = 40 }) {
  const clipId = `ai-avatar-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const { name, bg, body, accent, shape, eyes, mouth, extra, hasAntenna = false } = avatar;

  return (
    <Box
      component="svg"
      viewBox="0 0 100 100"
      role="img"
      aria-label={ name }
      sx={{ width: size, height: size, flexShrink: 0, display: 'block' }}
    >
      <defs>
        <clipPath id={ clipId }>
          <circle cx={ 50 } cy={ 50 } r={ 50 } />
        </clipPath>
      </defs>
      <g clipPath={ `url(#${clipId})` }>
        <circle cx={ 50 } cy={ 50 } r={ 50 } fill={ bg } />
        { hasAntenna && (
          <>
            <path d="M50 17V8" strokeWidth={ 3 } { ...STROKE } />
            <circle cx={ 50 } cy={ 7 } r={ 4.6 } fill={ accent } stroke={ INK } strokeWidth={ 2.4 } />
          </>
        ) }
        <path d={ BUBBLE_PATHS[shape] ?? BUBBLE_PATHS.round } fill={ body } stroke={ INK } strokeWidth={ 3 } strokeLinejoin="round" />
        <path d="M30 30Q36 25 44 25" stroke={ CREAM } strokeWidth={ 3.4 } strokeLinecap="round" fill="none" opacity={ 0.7 } />
        { renderEyes(eyes) }
        { renderMouth(mouth) }
        <circle cx={ 29 } cy={ 52 } r={ 3.8 } fill={ CHEEK } opacity={ 0.5 } />
        <circle cx={ 71 } cy={ 52 } r={ 3.8 } fill={ CHEEK } opacity={ 0.5 } />
        { renderExtra(extra, accent) }
      </g>
    </Box>
  );
}

export default AiAvatar;
