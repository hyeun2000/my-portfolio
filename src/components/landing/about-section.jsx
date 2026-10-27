import SectionCard from '../ui/section-card';

/**
 * AboutSection 컴포넌트
 * Home 페이지의 About Me 섹션 (현재는 역할 안내 텍스트만 표시)
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutSection />
 */
function AboutSection() {
  return (
    <SectionCard
      id="about"
      label="02 · ABOUT ME"
      title="About Me"
      tone="default"
      description="여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다."
    />
  );
}

export default AboutSection;
