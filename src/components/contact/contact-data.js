import EmailRounded from '@mui/icons-material/EmailRounded';
import GitHub from '@mui/icons-material/GitHub';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import PhoneRounded from '@mui/icons-material/PhoneRounded';
import PlaceRounded from '@mui/icons-material/PlaceRounded';
import X from '@mui/icons-material/X';
import YouTube from '@mui/icons-material/YouTube';

/**
 * Contact 섹션에 표시할 연락처 목록
 * TODO: 실제 연락처로 바꿔주세요.
 */
export const CONTACT_ITEMS = [
  {
    id: 'email',
    emoji: '💌',
    icon: EmailRounded,
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
  },
  {
    id: 'phone',
    emoji: '📞',
    icon: PhoneRounded,
    label: 'Phone',
    value: '010-0000-0000',
    href: 'tel:010-0000-0000',
  },
  {
    id: 'location',
    emoji: '🏡',
    icon: PlaceRounded,
    label: 'Location',
    value: 'Seoul, Korea',
    href: null,
  },
];

/**
 * SNS 링크 목록
 * TODO: 실제 계정 주소로 바꿔주세요.
 */
export const SNS_LINKS = [
  { id: 'github', label: 'GitHub', icon: GitHub, href: 'https://github.com/hyeun2000' },
  { id: 'instagram', label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { id: 'x', label: 'X (Twitter)', icon: X, href: 'https://x.com' },
  { id: 'linkedin', label: 'LinkedIn', icon: LinkedIn, href: 'https://linkedin.com' },
  { id: 'youtube', label: 'YouTube', icon: YouTube, href: 'https://youtube.com' },
];

/** 방명록 작성자 아바타로 돌아가며 쓰는 AI 챗봇 말풍선 캐릭터 (AiAvatar 설정값) */
export const GUEST_AVATARS = [
  { name: '안녕톡', bg: '#fff0b3', body: '#ff8a3d', accent: '#ffc93c', shape: 'round', eyes: 'happy', mouth: 'smile', extra: 'sparkle' },
  { name: '입력중톡', bg: '#ffb38a', body: '#ffc93c', accent: '#ff6f59', shape: 'round', eyes: 'dot', mouth: 'dots', hasAntenna: true },
  { name: '하트톡', bg: '#ffe27a', body: '#ff6f59', accent: '#e8650f', shape: 'circle', eyes: 'heart', mouth: 'cat', extra: 'heart' },
  { name: '아이디어톡', bg: '#ffd0a1', body: '#ff9f1c', accent: '#ffe27a', shape: 'round', eyes: 'big', mouth: 'o', extra: 'bulb' },
  { name: '흥얼톡', bg: '#ffc93c', body: '#ffb38a', accent: '#ff8a3d', shape: 'circle', eyes: 'sleepy', mouth: 'smile', extra: 'note' },
  { name: '반짝톡', bg: '#fff0b3', body: '#f4a62a', accent: '#ff6f59', shape: 'circle', eyes: 'star', mouth: 'grin', hasAntenna: true },
  { name: '찡긋톡', bg: '#ffb38a', body: '#ffe27a', accent: '#ff8a3d', shape: 'round', eyes: 'wink', mouth: 'tongue', extra: 'sparkle' },
  { name: '신남톡', bg: '#ffe27a', body: '#ff9a76', accent: '#ff9f1c', shape: 'round', eyes: 'excited', mouth: 'grin', hasAntenna: true },
];
