import { getUserInfo, modifyEmailApi, modifyUsername, setPasswordApi, upload } from '@/api/user.ts';
import { Toast } from '@nutui/nutui-react';
import { ModifyEmailDTO, ModifyUsernameDTO, SetPasswordDTO } from '@/types/user';

/**
 * 获取用户信息
 */
export async function getUser() {
  const { success, msg, data } = await getUserInfo();
  if (success) {
    return data;
  } else {
    Toast.show(msg);
  }
}

/**
 * 上传头像
 * @param formData 表单数据
 */
export async function uploadAvatar(formData: FormData) {
  const { success, msg, data } = await upload(formData);
  if (success) {
    return data;
  } else {
    Toast.show(msg);
  }
}

/**
 * 修改用户名
 * @param modifyUsernameDTO 修改用户名参数
 */
export async function modifyName(modifyUsernameDTO: ModifyUsernameDTO) {
  const { success, msg, data } = await modifyUsername(modifyUsernameDTO);
  if (success) {
    return data;
  } else {
    Toast.show(msg);
  }
}

/**
 * 设置密码
 * @param params 设置密码参数
 */
export async function modifyPassword(params: SetPasswordDTO) {
  const { success, msg, data } = await setPasswordApi(params);
  if (success) {
    return data;
  } else {
    Toast.show(msg);
  }
}

/**
 * 修改邮箱
 * @param params 修改邮箱参数
 */
export async function modifyEmail(params: ModifyEmailDTO) {
  const { success, msg, data } = await modifyEmailApi(params);
  if (success) {
    return data;
  } else {
    Toast.show(msg);
  }
}
