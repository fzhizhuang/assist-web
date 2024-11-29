export const Regx = {
  password: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,12}$/,
  passwordError: '密码必须包含字母和数字,4-12位',
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  emailError: '非法邮箱',
  code: /^[0-9]{4}$/,
  codeError: '验证码必须为4位数字',
};

// 发送验证码DTO
export interface SendCaptchaDTO {
  email: string;
  template: string | 'AUTH' | 'MODIFY_PASSWORD' | 'MODIFY_EMAIL';
}
