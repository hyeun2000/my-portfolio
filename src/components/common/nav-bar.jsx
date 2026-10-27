import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

/** 네비게이션 탭 목록 (end: 하위 경로에서 Home이 활성화되지 않도록) */
const NAV_ITEMS = [
  { label: 'Home', to: '/', end: true },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

/**
 * NavBar 컴포넌트
 * 상단 차콜 헤더에 로고와 Home / About Me / Projects 탭을 보여준다.
 * 현재 페이지 탭은 라임색 밑줄과 글자로 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <NavBar />
 */
function NavBar() {
  return (
    <AppBar
      position="sticky"
      elevation={ 0 }
      sx={{
        bgcolor: 'var(--color-secondary)',
        color: 'var(--color-text-on-dark)',
        borderBottom: '3px solid var(--color-primary)',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, md: 64 },
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Box
            component={ NavLink }
            to="/"
            sx={{
              color: 'var(--color-text-on-dark)',
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: { xs: '1rem', md: '1.25rem' },
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}
          >
            MY<Box component="span" sx={{ color: 'var(--color-primary)' }}>.</Box>PORTFOLIO
          </Box>
          <Box component="nav" sx={{ display: 'flex', gap: { xs: 0, md: 1 } }}>
            { NAV_ITEMS.map((item) => (
              <Button
                key={ item.to }
                component={ NavLink }
                to={ item.to }
                end={ item.end }
                sx={{
                  px: { xs: 1, md: 2 },
                  minWidth: 0,
                  borderRadius: 0,
                  fontSize: { xs: '0.85rem', md: '1rem' },
                  whiteSpace: 'nowrap',
                  color: '#cccccc',
                  borderBottom: '3px solid transparent',
                  '&:hover': {
                    color: 'var(--color-primary)',
                    bgcolor: 'transparent',
                  },
                  '&.active': {
                    color: 'var(--color-primary)',
                    borderBottomColor: 'var(--color-primary)',
                  },
                }}
              >
                { item.label }
              </Button>
            )) }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
