import { ModifyEmailDTO, ModifyUsernameDTO, SetPasswordDTO, UserInfo } from '@/types/user';
import { Http, Result } from '@/hooks/UseHttp.ts';
import { getToken } from '@/utils/token.ts';

// 获取请求基础路径

const baseUrl = import.meta.env.VITE_API_URL;

/**
 * 获取用户信息
 * @returns
 */
export function getUserInfo() {
  return Http.request<UserInfo>('/user/info', {
    method: 'GET',
  });
}

/**
 * 上传头像
 * @param formData formData
 */
export async function upload(formData: FormData) {
  console.log(formData);
  return await fetch(`${baseUrl}/user/uploadAvatar`, {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: 'Bearer ' + getToken(),
    },
  }).then((res) => {
    const response = res.json();
    return response as Promise<Result<string>>;
  });
}

/**
 * 修改用户昵称
 * @param {object} modifyUsernameDTO 修改用户昵称DTO
 * @param {string}  modifyUsernameDTO.username 用户昵称
 * @returns
 */
export function modifyUsername(modifyUsernameDTO: ModifyUsernameDTO) {
  return Http.request<void>(`/user/modifyUsername`, {
    method: 'POST',
    body: modifyUsernameDTO,
  });
}

/**
 * 设置密码
 * @param {object} params 设置密码
 * @param {string} params.password 密码
 * @param {string} params.confirmPassword 确认密码
 * @returns
 */
export function setPasswordApi(params: SetPasswordDTO) {
  return Http.request<void>(`/user/setPassword`, {
    method: 'POST',
    body: params,
  });
}

/**
 * 修改邮箱
 * @param {object} params 修改邮箱
 * @param {string} params.email 邮箱
 * @param {string} params.captcha 验证码
 * @returns
 */
export function modifyEmailApi(params: ModifyEmailDTO) {
  return Http.request<void>(`/user/modifyEmail`, {
    method: 'POST',
    body: params,
  });
}
