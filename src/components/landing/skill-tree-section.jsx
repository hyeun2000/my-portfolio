import SectionCard from '../ui/section-card';

/**
 * SkillTreeSection 컴포넌트
 * Home 페이지의 Skill Tree 섹션 (현재는 역할 안내 텍스트만 표시)
 *
 * Props: 없음
 *
 * Example usage:
 * <SkillTreeSection />
 */
function SkillTreeSection() {
  return (
    <SectionCard
      id="skill-tree"
      label="03 · SKILL TREE"
      title="Skill Tree"
      tone="tint"
      description="여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다."
    />
  );
}

export default SkillTreeSection;
