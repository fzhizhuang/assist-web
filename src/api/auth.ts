import { EmailAuthDTO, PasswordAuthDTO, QrCodeVO, WxAuthDTO } from '@/types/auth';
import { Http } from '@/hooks/UseHttp.ts';

/**
 * 密码认证
 * @param passwordAuthDto 密码认证参数
 */
export function passwordAuth(passwordAuthDto: PasswordAuthDTO) {
  return Http.request<string>('/auth/password', {
    method: 'POST',
    body: JSON.stringify(passwordAuthDto),
  });
}

/**
 * 邮箱认证
 * @param emailAuthDto 邮箱认证参数
 */
export function emailAuth(emailAuthDto: EmailAuthDTO) {
  return Http.request<string>('/auth/email', {
    method: 'POST',
    body: JSON.stringify(emailAuthDto),
  });
}

/**
 * 获取二维码
 */
export function getQrCode() {
  return Http.request<QrCodeVO>('/auth/qrcode', {
    method: 'GET',
  });
}

/**
 * 扫码登录
 * @param wxAuthDto 微信认证参数
 */
export function wxAuth(wxAuthDto: WxAuthDTO) {
  return Http.request<string>('/auth/wx', {
    method: 'POST',
    body: JSON.stringify(wxAuthDto),
  });
}
