import Stack from '@mui/material/Stack';

import AboutSection from '../components/landing/about-section';
import ContactSection from '../components/landing/contact-section';
import HeroSection from '../components/landing/hero-section';
import ProjectsSection from '../components/landing/projects-section';
import SkillTreeSection from '../components/landing/skill-tree-section';

/**
 * HomePage 컴포넌트
 * Hero → About Me → Skill Tree → Projects → Contact 순서로 5개 섹션을 보여준다.
 *
 * Props: 없음
 *
 * Example usage:
 * <HomePage />
 */
function HomePage() {
  return (
    <Stack spacing={{ xs: 3, md: 4 }}>
      <HeroSection />
      <AboutSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </Stack>
  );
}

export default HomePage;
