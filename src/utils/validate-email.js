const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * 이메일 형식이 올바른지 확인한다.
 *
 * @param {string} email - 검사할 이메일 [Required]
 * @returns {boolean} 형식이 맞으면 true
 */
export function validateEmail(email) {
  return EMAIL_PATTERN.test(email);
}
