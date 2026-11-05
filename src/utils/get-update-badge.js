/** 새 글·업데이트 뱃지를 보여줄 기간 (7일) */
const RECENT_PERIOD = 7 * 24 * 60 * 60 * 1000;
/** 생성 직후 자동 갱신과 실제 수정을 구분하기 위한 여유 시간 (1분) */
const EDIT_THRESHOLD = 60 * 1000;

/**
 * 최근에 등록·수정된 프로젝트에 붙일 뱃지 문구를 돌려준다.
 *
 * @param {string} createdAt - 생성일시 ISO 문자열 [Required]
 * @param {string} updatedAt - 수정일시 ISO 문자열 [Required]
 * @param {number} now - 기준 시각 (ms) [Optional, 기본값: Date.now()]
 * @returns {'NEW' | 'UPDATE' | ''} 뱃지 문구 (해당 없으면 빈 문자열)
 */
export function getUpdateBadge(createdAt, updatedAt, now = Date.now()) {
  const created = new Date(createdAt).getTime();
  const updated = new Date(updatedAt).getTime();

  if (now - created <= RECENT_PERIOD) return 'NEW';
  if (updated - created > EDIT_THRESHOLD && now - updated <= RECENT_PERIOD) return 'UPDATE';
  return '';
}
