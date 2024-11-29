import { SendCaptchaDTO } from '@/types';
import { sendCaptcha } from '@/api';
import { Toast } from '@nutui/nutui-react';

/**
 * 发送验证码
 * @param sendCaptchaDTO 发送验证码参数
 */
export async function sendEmailCaptcha(sendCaptchaDTO: SendCaptchaDTO) {
  const { code, msg, data } = await sendCaptcha(sendCaptchaDTO);
  if (code === 'A000') {
    return data;
  } else {
    Toast.show(msg);
  }
}
