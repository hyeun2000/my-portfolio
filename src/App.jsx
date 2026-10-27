import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import NavBar from './components/common/nav-bar';
import AboutPage from './pages/about-page';
import HomePage from './pages/home-page';
import ProjectsPage from './pages/projects-page';

/** vite.config.js의 base('/my-portfolio/')를 라우터 기준 경로로 사용 */
const ROUTER_BASENAME = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * App 컴포넌트
 * 상단 네비게이션 + 반응형 중앙정렬 레이아웃 안에서 페이지를 라우팅한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <App />
 */
function App() {
  return (
    <BrowserRouter basename={ ROUTER_BASENAME }>
      <NavBar />
      <Box
        component="main"
        sx={{
          width: '100%',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="md" sx={{ py: 4, px: { xs: 2, md: 3 } }}>
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/about" element={ <AboutPage /> } />
            <Route path="/projects" element={ <ProjectsPage /> } />
            <Route path="*" element={ <Navigate to="/" replace /> } />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
