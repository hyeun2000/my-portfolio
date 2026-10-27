import { createTheme } from '@mui/material/styles';

/**
 * MUI 테마
 * - palette 값은 '컬러 팔레트 디자인 시스템.md'의 라이트 모드 값과 같다.
 * - 다크 모드 전환은 index.css의 CSS 변수가 담당하므로,
 *   화면 색상은 컴포넌트 sx에서 var(--color-*)로 참조한다.
 */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#b6d600', light: '#f3f7d9', dark: '#9cb800', contrastText: '#000000' },
    secondary: { main: '#353535', contrastText: '#ffffff' },
    info: { main: '#2e459b', contrastText: '#ffffff' },
    warning: { main: '#ed7100', contrastText: '#000000' },
    background: { default: '#ffffff', paper: '#f2f3f5' },
    text: { primary: '#333333', secondary: '#555555', disabled: '#767676' },
    divider: '#dddddd',
  },
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "Roboto", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 700,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'var(--color-bg-primary)',
          color: 'var(--color-text-primary)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: 'var(--color-button-primary)',
          color: '#000000',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: 'var(--color-button-hover)',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

export default theme;
