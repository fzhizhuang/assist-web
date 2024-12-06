import { Avatar, AvatarCropper, Input, NavBar } from '@nutui/nutui-react';
import { ArrowRight, Check, Edit } from '@nutui/icons-react';
import { useEffect, useState } from 'react';
import { useUserStore } from '@/store/user.ts';
import { base64ToBlob } from '@/utils';
import { logout } from '@/service/authService.ts';
import { useNavigate } from 'react-router-dom';

export function UserHome() {
  const { userInfo, setUserInfo, getUserInfo, uploadAvatar, modifyUsername } = useUserStore();
  const [showInput, setShowInput] = useState(false);
  const [username, setUsername] = useState(userInfo?.username);
  const navigate = useNavigate();

  // 剪切图片
  const cutImage = (data: string) => {
    if (userInfo) userInfo.avatar = data;
    setUserInfo(userInfo);
    const blob = base64ToBlob(data, 'image/png');
    const formData = new FormData();
    formData.append('avatar', blob, 'avatar.jpg');
    uploadAvatar(formData);
  };

  // 修改昵称
  const handleModifyName = () => {
    // 修改用户名
    console.log('修改用户名', username);
    modifyUsername(username);
    // 关闭输入框
    setShowInput(false);
  };

  useEffect(() => {
    // 获取用户信息
    getUserInfo();
  }, [getUserInfo]);

  // 注销登录
  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <div className={'h-full bg-neutral-50 overflow-scroll'}>
        <div>
          <NavBar style={{ marginBottom: 0, background: '#fff' }}>个人中心</NavBar>
        </div>
        {/* 个人信息 */}
        <div className={'flex justify-center items-center h-24 mt-3 cursor-pointer'}>
          <div
            className={'flex justify-start items-center gap-5 pl-4 h-24 rounded-2xl'}
            style={{ width: '95%', background: '#fff' }}
          >
            {/* 头像剪切 */}
            <AvatarCropper shape="round" onConfirm={cutImage} editText>
              <Avatar size={'72'} shape="round" src={userInfo?.avatar} />
            </AvatarCropper>
            <div className={'flex flex-col gap-4'}>
              {showInput ? (
                <div className={'flex justify-start items-center gap-2'}>
                  <Input
                    placeholder={'请输入昵称'}
                    defaultValue={userInfo?.username}
                    onChange={(v) => setUsername(v)}
                    style={{ border: '1px solid #cbd5e1' }}
                  />
                  <Check height={24} width={24} onClick={() => handleModifyName()} />
                </div>
              ) : (
                <div className={'flex justify-start items-center gap-2'}>
                  <span className={'text-lg font-semibold'}>{userInfo?.username}</span>
                  <Edit height={24} width={24} onClick={() => setShowInput(true)} />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* 额度信息 */}
        <div className={'flex justify-center items-center h-16 mt-3 cursor-pointer'}>
          <div
            className={'flex justify-start items-center gap-5 pl-4 h-16 rounded-2xl'}
            style={{ width: '95%', background: '#fff' }}
          >
            <div className={'flex justify-between items-center gap-2 w-full'}>
              <div className={'flex flex-col gap-1 justify-center items-center'}>
                <div className={'text-xl font-semibold'}>{userInfo?.total}</div>
                <div className={'text-sm text-slate-600'}>总额度</div>
              </div>
              <div className={'flex flex-col gap-1 justify-center items-center'}>
                <div className={'text-xl font-semibold'}>{userInfo?.used}</div>
                <div className={'text-sm text-slate-600'}>已使用额度</div>
              </div>
              <div className={'flex flex-col gap-1 justify-center items-center pr-4'}>
                <div className={'text-xl font-semibold'}>{userInfo?.surplus}</div>
                <div className={'text-sm text-slate-600'}>剩余额度</div>
              </div>
            </div>
          </div>
        </div>
        {/* 我的订单 */}
        <div className={'flex justify-center items-center h-16 mt-3 cursor-pointer'}>
          <div
            className={'flex justify-start items-center gap-5 pl-4 h-16 rounded-2xl'}
            style={{ width: '95%', background: '#fff' }}
          >
            <div className={'flex justify-between items-center gap-2 w-full'}>
              <div className={'text-xl font-medium'}>我的订单</div>
              <div className={'pr-1'}>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        {/* 我的信息 */}
        <div className={'flex justify-center items-center h-32 mt-3 cursor-pointer'}>
          <div
            className={'flex flex-col items-center gap-5 pl-4 h-32 rounded-2xl'}
            style={{ width: '95%', background: '#fff' }}
          >
            <div
              className={'flex justify-between items-center gap-3 w-full h-16'}
              onClick={() => navigate('/user/profile')}
            >
              <div className={'text-xl font-medium'}>个人资料</div>
              <div className={'pr-1'}>
                <ArrowRight />
              </div>
            </div>
            <div
              className={'flex justify-between items-center gap-3 w-full h-16'}
              onClick={() => navigate('/user/account')}
            >
              <div className={'text-xl font-medium'}>账号与安全</div>
              <div className={'pr-1'}>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        {/* 退出登录 */}
        <div className={'flex justify-center items-center h-16 mt-3 cursor-pointer'}>
          <div
            className={'flex justify-start items-center gap-5 pl-4 h-16 rounded-2xl'}
            style={{ width: '95%', background: '#fff' }}
          >
            <div className={'flex justify-between items-center gap-2 w-full'} onClick={handleLogout}>
              <div className={'text-xl font-medium'}>退出登录</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
