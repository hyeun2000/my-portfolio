import SectionCard from '../ui/section-card';

/**
 * ContactSection 컴포넌트
 * Home 페이지의 Contact 섹션 (현재는 역할 안내 텍스트만 표시)
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  return (
    <SectionCard
      id="contact"
      label="05 · CONTACT"
      title="Contact"
      tone="accent"
      description="여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다."
    />
  );
}

export default ContactSection;
