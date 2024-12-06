export const Regx = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
  passwordError: '密码必须包含大小写字母和数字，且长度在8-16之间',
  email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
  emailError: '请输入正确的邮箱地址',
  code: /^[0-9]{6}$/,
  codeError: '验证码必须为6位数字',
};

// 发送验证码DTO
export interface SendCaptchaDTO {
  email: string;
  template: string | 'AUTH' | 'MODIFY_PASSWORD' | 'MODIFY_EMAIL';
}
