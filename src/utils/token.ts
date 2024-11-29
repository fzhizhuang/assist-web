/**
 * 设置token
 * @param token token
 */
export function setToken(token: string) {
  localStorage.setItem('token', token);
}

/**
 * 获取token
 */
export function getToken() {
  return localStorage.getItem('token');
}

/**
 * 移除token
 */
export function removeToken() {
  localStorage.removeItem('token');
}
