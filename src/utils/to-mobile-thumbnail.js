const THUM_IO_PREFIX = 'https://image.thum.io/get/';
/** thum.io 옵션: 애니메이션 없는 정지 이미지 + 아이폰 화면 크기(375×812)로 촬영 */
const MOBILE_OPTIONS = 'noanimate/iphoneX/';

/**
 * DB 의 thum.io 썸네일 URL 을 모바일 화면 촬영용 URL 로 바꾼다.
 * thum.io 주소가 아니면 원래 값을 그대로 돌려준다.
 *
 * @param {string} thumbnailUrl - 'https://image.thum.io/get/{detail_url}' 형태 [Required]
 * @returns {string} 모바일 촬영 옵션이 붙은 썸네일 URL
 */
export function toMobileThumbnail(thumbnailUrl) {
  if (!thumbnailUrl?.startsWith(THUM_IO_PREFIX)) return thumbnailUrl;
  return `${THUM_IO_PREFIX}${MOBILE_OPTIONS}${thumbnailUrl.slice(THUM_IO_PREFIX.length)}`;
}
