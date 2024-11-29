import { EmailAuthDTO, PasswordAuthDTO, WxAuthDTO } from '@/types/auth';
import { emailAuth, getQrCode, passwordAuth, wxAuth } from '@/api/auth.ts';
import { Toast } from '@nutui/nutui-react';

/**
 * 密码认证
 * @param passwordAuthDto 密码认证参数
 */
export async function passwordAuthentic(passwordAuthDto: PasswordAuthDTO) {
  const { code, msg, data } = await passwordAuth(passwordAuthDto);
  if (code === 'A000') {
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
  const { code, msg, data } = await emailAuth(emailAuthDto);
  if (code === 'A000') {
    return data;
  } else {
    Toast.show(msg);
  }
}

/**
 * 获取二维码
 */
export async function getWxQrCode() {
  const { code, msg, data } = await getQrCode();
  if (code === 'A000') {
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
  const { code, msg, data } = await wxAuth(wxAuthDto);
  if (code === 'A000') {
    return data;
  } else {
    Toast.show(msg);
  }
}
