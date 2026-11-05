/**
 * 카드별 구분 색상 (순서대로 돌아가며 사용)
 * - soft: 썸네일 배경·뱃지 배경용 파스텔 색
 * - main: 테두리·버튼·강조용 진한 색 (흰 글자와 대비 4.5:1 이상)
 */
export const CARD_TONES = [
  { name: 'mint', soft: '#e3f6ee', main: '#1d7a52' },
  { name: 'sky', soft: '#e4efff', main: '#2b5fbf' },
  { name: 'peach', soft: '#ffeadd', main: '#b44a12' },
  { name: 'lavender', soft: '#efe8ff', main: '#6440c4' },
  { name: 'pink', soft: '#ffe6ef', main: '#b8305f' },
  { name: 'lemon', soft: '#f5f7d4', main: '#5f6b00' },
];

/**
 * 카드 순서(index)에 맞는 색상 조합을 돌려준다.
 *
 * @param {number} index - 카드 순서 [Required]
 * @returns {{ name: string, soft: string, main: string }} 색상 조합
 */
export function getCardTone(index) {
  return CARD_TONES[index % CARD_TONES.length];
}
