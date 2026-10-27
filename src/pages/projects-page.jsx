import SectionCard from '../components/ui/section-card';

/**
 * ProjectsPage 컴포넌트
 * 포트폴리오 작품 목록 페이지 (현재는 역할 안내 텍스트만 표시)
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsPage />
 */
function ProjectsPage() {
  return (
    <SectionCard
      label="PAGE · PROJECTS"
      title="Projects"
      tone="muted"
      description="Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다."
    />
  );
}

export default ProjectsPage;
