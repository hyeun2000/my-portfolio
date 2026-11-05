import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import ProjectCard from './project-card';
import { getCardTone } from './project-data';

/**
 * ProjectList 컴포넌트
 * 태블릿·데스크톱(600px 이상)은 Grid 카드 그리드(2열/3열)로,
 * 모바일은 한 장씩 옆으로 넘기는 스와이프 목록 + 위치 점(dot) 표시로 보여준다.
 *
 * Props:
 * @param {Array} projects - projects 테이블 행 목록 [Required]
 * @param {Set<number>} highlightedIds - 실시간 변경으로 강조할 프로젝트 id 모음 [Optional, 기본값: 빈 Set]
 *
 * Example usage:
 * <ProjectList projects={ projects } highlightedIds={ highlightedIds } />
 */
function ProjectList({ projects, highlightedIds = new Set() }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCard = (project, index) => (
    <ProjectCard
      project={ project }
      tone={ getCardTone(index) }
      isHighlighted={ highlightedIds.has(project.id) }
    />
  );

  /** 스와이프 위치로 현재 보고 있는 카드 번호를 계산한다. */
  const handleScroll = (event) => {
    const { scrollLeft, scrollWidth, clientWidth, firstElementChild } = event.currentTarget;
    const lastIndex = projects.length - 1;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 2;
    /** 카드 1장 너비 + gap(16px) 만큼 밀 때마다 한 칸씩 이동 */
    const step = (firstElementChild?.offsetWidth ?? clientWidth) + 16;
    const index = isAtEnd ? lastIndex : Math.round(scrollLeft / step);
    setActiveIndex(Math.min(Math.max(index, 0), lastIndex));
  };

  if (!isMobile) {
    return (
      <Grid container spacing={{ sm: 2.5, md: 3 }}>
        { projects.map((project, index) => (
          <Grid key={ project.id } size={{ xs: 12, sm: 6, md: 4 }}>
            { renderCard(project, index) }
          </Grid>
        )) }
      </Grid>
    );
  }

  return (
    <Box>
      <Box
        onScroll={ handleScroll }
        sx={{
          display: 'flex',
          gap: 2,
          mx: -2,
          px: 2,
          py: 1.5,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollPaddingInline: 16,
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        { projects.map((project, index) => (
          <Box
            key={ project.id }
            sx={{ flex: projects.length > 1 ? '0 0 86%' : '0 0 100%', scrollSnapAlign: 'start' }}
          >
            { renderCard(project, index) }
          </Box>
        )) }
      </Box>

      { projects.length > 1 && (
        <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <Box sx={{ display: 'flex', gap: 0.75 }} aria-hidden="true">
            { projects.map((project, index) => (
              <Box
                key={ project.id }
                sx={{
                  width: index === activeIndex ? 20 : 8,
                  height: 8,
                  borderRadius: 999,
                  bgcolor: index === activeIndex ? getCardTone(index).main : 'var(--color-border)',
                  transition: 'all 0.3s ease',
                }}
              />
            )) }
          </Box>
          <Box component="span" sx={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            옆으로 밀어서 더 보기 👉
          </Box>
        </Box>
      ) }
    </Box>
  );
}

export default ProjectList;
