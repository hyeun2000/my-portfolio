import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import ProjectList from '../components/projects/project-list';
import useProjects from '../hooks/use-projects';

/**
 * ProjectsPage 컴포넌트
 * Supabase projects 테이블의 게시된 작품을 카드 그리드로 보여주는 페이지
 * (새 작품 등록·수정은 실시간으로 반영되고 카드 애니메이션으로 알려준다)
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsPage />
 */
function ProjectsPage() {
  const { projects, isLoading, error, isConfigured, highlightedIds } = useProjects();

  const renderStatus = (text) => (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        borderRadius: 5,
        textAlign: 'center',
        lineHeight: 1.6,
        color: 'var(--color-text-secondary)',
        bgcolor: 'var(--color-bg-secondary)',
      }}
    >
      { text }
    </Box>
  );

  const renderBody = () => {
    if (!isConfigured) return renderStatus('프로젝트 서버 준비 중이에요 🛠️');
    if (isLoading && projects.length === 0) {
      return (
        <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={ 36 } sx={{ color: 'var(--color-primary-dark)' }} />
        </Box>
      );
    }
    if (error) return renderStatus(`${error} 😢`);
    if (projects.length === 0) return renderStatus('곧 멋진 프로젝트로 채워질 예정이에요! ✨');

    return <ProjectList projects={ projects } highlightedIds={ highlightedIds } />;
  };

  return (
    <Box component="section" aria-labelledby="projects-title">
      <Box sx={{ mb: { xs: 3, md: 4 } }}>
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            px: 1.5,
            py: 0.5,
            mb: 1.5,
            borderRadius: 999,
            fontSize: { xs: '0.75rem', md: '0.8rem' },
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#000000',
            bgcolor: 'var(--color-primary)',
          }}
        >
          PAGE · PROJECTS
        </Box>
        <Typography
          component="h1"
          id="projects-title"
          sx={{
            mb: 1,
            fontSize: { xs: '2rem', md: '2.6rem' },
            fontWeight: 800,
            lineHeight: 1.2,
            color: 'var(--color-text-strong)',
          }}
        >
          Projects
          { projects.length > 0 && (
            <Box component="span" sx={{ ml: 1, fontSize: '0.5em', fontWeight: 700, color: 'var(--color-text-muted)' }}>
              { projects.length }
            </Box>
          ) }
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
          업무에 필요한 것들을 직접 만들어 본 프로젝트 모음이에요.
        </Typography>
      </Box>

      { renderBody() }
    </Box>
  );
}

export default ProjectsPage;
