import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/material/styles';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

import { getUpdateBadge } from '../../utils/get-update-badge';
import { toMobileThumbnail } from '../../utils/to-mobile-thumbnail';
import MobileMockupThumbnail from './mobile-mockup-thumbnail';
import TechStackBadges from './tech-stack-badges';

/** 새 탭으로 이동하는 동안 버튼 로딩 표시 시간 (ms) */
const OPENING_DURATION = 1200;

/** 실시간 새 글/수정 시: 통통 튀며 색 테두리가 퍼지는 효과 */
const updatePop = (color) => keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 ${color}66; }
  20% { transform: scale(1.04); box-shadow: 0 0 0 10px ${color}33; }
  40% { transform: scale(0.99); box-shadow: 0 0 0 0 ${color}00; }
  60% { transform: scale(1.02); box-shadow: 0 0 0 8px ${color}33; }
  100% { transform: scale(1); box-shadow: 0 0 0 0 ${color}00; }
`;

/** NEW / UPDATE 뱃지: 부드럽게 숨 쉬듯 커졌다 작아지는 효과 */
const badgePulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
`;

/**
 * ProjectCard 컴포넌트
 * 모바일 목업 썸네일, 프로젝트 이름, 한 줄 설명, 기술 스택 뱃지, View Details 버튼을 보여준다.
 * 최근 등록·수정된 프로젝트는 NEW/UPDATE 뱃지를, 실시간으로 바뀐 프로젝트는 강조 애니메이션을 보여준다.
 *
 * Props:
 * @param {object} project - projects 테이블 행 ({ title, description, tech_stack, detail_url, thumbnail_url, created_at, updated_at }) [Required]
 * @param {object} tone - 카드 색상 조합 ({ soft, main }) [Required]
 * @param {boolean} isHighlighted - 실시간 변경 강조 애니메이션 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <ProjectCard project={ project } tone={ getCardTone(0) } isHighlighted />
 */
function ProjectCard({ project, tone, isHighlighted = false }) {
  const [isOpening, setIsOpening] = useState(false);
  const {
    title,
    description,
    tech_stack: techStack,
    detail_url: detailUrl,
    thumbnail_url: thumbnailUrl,
    created_at: createdAt,
    updated_at: updatedAt,
  } = project;
  const badge = getUpdateBadge(createdAt, updatedAt);

  useEffect(() => {
    if (!isOpening) return undefined;
    const timer = setTimeout(() => setIsOpening(false), OPENING_DURATION);
    return () => clearTimeout(timer);
  }, [isOpening]);

  return (
    <Card
      component="article"
      elevation={ 0 }
      className="project-card"
      sx={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        bgcolor: 'var(--color-bg-primary)',
        border: `2px solid ${tone.soft}`,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        WebkitTapHighlightColor: 'transparent',
        animation: isHighlighted ? `${updatePop(tone.main)} 1.6s ease-in-out 2` : 'none',
        '@media (hover: hover)': {
          '&:hover': {
            transform: 'translateY(-6px) scale(1.03)',
            borderColor: tone.main,
            boxShadow: '0 14px 32px rgba(0, 0, 0, 0.12)',
          },
          '&:hover .project-card__phone': {
            transform: 'translateY(-4%) scale(1.06)',
          },
        },
        '&:active': {
          transform: 'scale(0.98)',
        },
      }}
    >
      { badge && (
        <Box
          component="span"
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: 14,
            left: 14,
            px: 1.25,
            py: 0.4,
            borderRadius: 999,
            fontSize: '0.7rem',
            fontWeight: 800,
            letterSpacing: '0.06em',
            color: '#ffffff',
            bgcolor: tone.main,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
            animation: `${badgePulse} 1.8s ease-in-out infinite`,
            '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
          }}
        >
          { badge }
        </Box>
      ) }

      <MobileMockupThumbnail
        imageUrl={ toMobileThumbnail(thumbnailUrl) }
        title={ title }
        toneSoft={ tone.soft }
        toneMain={ tone.main }
      />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.25, p: { xs: 2.25, md: 2.5 } }}>
        <Typography
          component="h3"
          sx={{ fontSize: { xs: '1.15rem', md: '1.2rem' }, fontWeight: 700, lineHeight: 1.3, color: 'var(--color-text-strong)' }}
        >
          { title }
        </Typography>
        <Typography
          title={ description }
          sx={{
            fontSize: '0.9rem',
            lineHeight: 1.5,
            color: 'var(--color-text-secondary)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          { description }
        </Typography>
        <TechStackBadges items={ techStack } toneSoft={ tone.soft } toneMain={ tone.main } />

        <Button
          component="a"
          href={ detailUrl }
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          disableElevation
          onClick={ () => setIsOpening(true) }
          endIcon={ isOpening
            ? <CircularProgress size={ 16 } thickness={ 5 } sx={{ color: 'inherit' }} />
            : <ArrowOutwardRoundedIcon /> }
          sx={{
            mt: 'auto',
            py: 1,
            borderRadius: 999,
            fontWeight: 700,
            color: '#ffffff',
            bgcolor: tone.main,
            transition: 'transform 0.15s ease, filter 0.2s ease',
            '&:hover': { bgcolor: tone.main, filter: 'brightness(1.1)' },
            '&:active': { transform: 'scale(0.95)' },
          }}
        >
          { isOpening ? '여는 중...' : 'View Details' }
        </Button>
      </Box>
    </Card>
  );
}

export default ProjectCard;
