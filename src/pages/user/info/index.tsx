import { Avatar, Divider, NavBar } from '@nutui/nutui-react';
import { ArrowLeft } from '@nutui/icons-react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/user.ts';

/**
 * 用户信息页面
 * @constructor
 */
export function UserInfo() {
  const navigate = useNavigate();
  const { userInfo } = useUserStore();
  return (
    <>
      <div>
        <NavBar
          back={
            <>
              <ArrowLeft />
            </>
          }
          onBackClick={() => navigate(-1)}
        >
          个人资料
        </NavBar>
        <div>
          {/* 我的信息 */}
          <div className={'flex justify-center items-center h-full cursor-pointer'}>
            <div className={'flex flex-col items-center pl-4 rounded-2xl'} style={{ width: '95%' }}>
              <div className={'flex justify-between items-center gap-3 w-full h-10'}>
                <div className={'text-xl font-medium'}>头像</div>
                <div className={'pr-1 flex justify-center items-center'}>
                  <Avatar className={'mr-2'} src={userInfo?.avatar} />
                </div>
              </div>
              <Divider />
              <div className={'flex justify-between items-center gap-3 w-full h-10'}>
                <div className={'text-xl font-medium'}>昵称</div>
                <div className={'pr-1 flex justify-center items-center'}>
                  <span className={'mr-2'}>{userInfo?.username}</span>
                </div>
              </div>
              <Divider />
              <div className={'flex justify-between items-center gap-3 w-full h-10'}>
                <div className={'text-xl font-medium'}>角色</div>
                <div className={'pr-1 flex justify-center items-center'}>
                  <span className={'mr-2'}>{userInfo?.role === 'ADMIN' ? '管理员' : '普通用户'}</span>
                </div>
              </div>
              <Divider />
              <div className={'flex justify-between items-center gap-3 w-full h-10'}>
                <div className={'text-xl font-medium'}>账号状态</div>
                <div className={'pr-1 flex justify-center items-center'}>
                  <span className={'mr-2'}>{userInfo?.status === 'ENABLE' ? '正常' : '封禁'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
