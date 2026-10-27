import SectionCard from '../ui/section-card';

/**
 * HeroSection 컴포넌트
 * Home 페이지의 Hero 섹션 (현재는 역할 안내 텍스트만 표시)
 *
 * Props: 없음
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <SectionCard
      id="hero"
      label="01 · HERO"
      title="Hero"
      tone="dark"
      description="여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다."
    />
  );
}

export default HeroSection;
