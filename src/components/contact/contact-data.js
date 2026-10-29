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

/** 방명록 작성자 아바타로 돌아가며 쓰는 만화 캐릭터 이모지 */
export const GUEST_EMOJIS = [
  '🦸', '🧙', '👽', '🤖', '🧛', '👻', '🧜', '🥷', '🧞', '👾', '🧚', '🦹', '🤠', '🧟', '🎃', '🐲',
];
