// 密码认证DTO
export interface PasswordAuthDTO {
  email: string;
  password: string;
}

// 邮箱认证DTO
export interface EmailAuthDTO {
  email: string;
  captcha: string;
}

// 二维码VO
export interface QrCodeVO {
  ticket: string;
  url: string;
}

// 微信认证DTO
export interface WxAuthDTO {
  ticket: string;
}
