/**
 * 用户信息
 */
export interface UserInfo {
  /*用户ID */
  userId?: string;
  /*用户昵称 */
  username?: string;
  /*头像 */
  avatar?: string;
  /*邮箱 */
  email?: string;
  /*微信openid */
  openid?: string;
  /* 用户角色 */
  role?: string;
  /*账号状态 */
  status?: string;
  /*总额度 */
  total?: number;
  /*已使用额度 */
  used?: number;
  /*剩余额度 */
  surplus?: number;
}

/**
 * 修改用户昵称参数
 */
export interface ModifyUsernameDTO {
  /*用户昵称 */
  username?: string;
}

/**
 * 修改用户密码参数
 */
export interface SetPasswordDTO {
  /*密码 */
  password?: string;

  /*确认密码 */
  confirmPassword?: string;
}

/**
 * 修改邮箱参数
 */
export interface ModifyEmailDTO {
  /*邮箱 */
  email: string;

  /*验证码 */
  captcha: string;
}