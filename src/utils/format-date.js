/**
 * ISO 날짜 문자열을 '2026.10.29 14:05' 형태로 바꾼다.
 *
 * @param {string} isoString - 변환할 날짜 문자열 [Required]
 * @returns {string} 화면 표시용 날짜 문자열
 */
export function formatDate(isoString) {
  const date = new Date(isoString);
  const pad = (value) => String(value).padStart(2, '0');

  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} `
    + `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
