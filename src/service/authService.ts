import { EmailAuthDTO, PasswordAuthDTO, WxAuthDTO } from '@/types/auth';
import { emailAuth, getQrCode, logoutApi, passwordAuth, sendCaptcha, wxAuth } from '@/api/auth.ts';
import { Toast } from '@nutui/nutui-react';
import { SendCaptchaDTO } from '@/types';
import { removeToken } from '@/utils/token.ts';

/**
 * 密码认证
 * @param passwordAuthDto 密码认证参数
 */
export async function passwordAuthentic(passwordAuthDto: PasswordAuthDTO) {
  const { success, msg, data } = await passwordAuth(passwordAuthDto);
  if (success) {
    return data;
  } else {
    Toast.show(msg);
  }
}

/**
 * 邮箱认证
 * @param emailAuthDto 邮箱认证参数
 */
export async function emailAuthentic(emailAuthDto: EmailAuthDTO) {
  const { success, msg, data } = await emailAuth(emailAuthDto);
  if (success) {
    return data;
  } else {
    Toast.show(msg);
  }
}

/**
 * 获取二维码
 */
export async function getWxQrCode() {
  const { success, msg, data } = await getQrCode();
  if (success) {
    return data;
  } else {
    Toast.show(msg);
  }
}

/**
 * 扫码登录
 * @param wxAuthDto 微信认证参数
 */
export async function wxAuthentic(wxAuthDto: WxAuthDTO) {
  const { success, code, msg, data } = await wxAuth(wxAuthDto);
  if (success && code === '0000') {
    return data;
  } else if (success && code === '1000') {
    console.log('扫码中');
  } else {
    Toast.show(msg);
  }
}

/**
 * 发送验证码
 * @param sendCaptchaDTO 发送验证码参数
 */
export async function sendEmailCaptcha(sendCaptchaDTO: SendCaptchaDTO) {
  const { success, msg, data } = await sendCaptcha(sendCaptchaDTO);
  if (success) {
    return data;
  } else {
    Toast.show(msg);
  }
}

/**
 * 退出登录
 */
export async function logout() {
  const { success, msg } = await logoutApi();
  if (success) {
    // 清除token
    removeToken();
    // 跳转登录页
    window.location.href = '/login';
  } else {
    Toast.show(msg);
  }
}
