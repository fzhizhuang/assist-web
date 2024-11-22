export const Regx = {
  password: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,12}$/,
  passwordError: '密码必须包含字母和数字,4-12位',
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  emailError: '非法邮箱',
  code: /^[0-9]{4}$/,
  codeError: '验证码必须为4位数字',
};

export const EmailRules = [
  { required: true, message: '请输入邮箱' },
  { pattern: Regx.email, message: Regx.emailError },
];

export const PasswordRules = [
  { required: true, message: '请输入密码' },
  { pattern: Regx.password, message: Regx.passwordError },
];
