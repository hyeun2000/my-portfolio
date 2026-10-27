import SectionCard from '../components/ui/section-card';

/**
 * AboutPage 컴포넌트
 * About Me 상세 페이지 (현재는 역할 안내 텍스트만 표시)
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutPage />
 */
function AboutPage() {
  return (
    <SectionCard
      label="PAGE · ABOUT ME"
      title="About Me"
      tone="tint"
      description="About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다."
    />
  );
}

export default AboutPage;
