import SectionCard from '../ui/section-card';

/**
 * ProjectsSection 컴포넌트
 * Home 페이지의 Projects 섹션 (현재는 역할 안내 텍스트만 표시)
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  return (
    <SectionCard
      id="projects"
      label="04 · PROJECTS"
      title="Projects"
      tone="muted"
      description="여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다."
    />
  );
}

export default ProjectsSection;
