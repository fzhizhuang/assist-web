import { SendCaptchaDTO } from '@/types';
import { Http } from '@/hooks/UseHttp.ts';

/**
 * 发送验证码
 * @param sendCaptchaDTO 发送验证码参数
 */
export function sendCaptcha(sendCaptchaDTO: SendCaptchaDTO) {
  return Http.request('/sendCaptcha', {
    method: 'POST',
    body: JSON.stringify(sendCaptchaDTO),
  });
}
