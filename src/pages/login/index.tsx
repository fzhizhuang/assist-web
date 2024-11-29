import PasswordLogin from '@/pages/login/PasswordLogin.tsx';
import EmailCodeLogin from '@/pages/login/EmailCodeLogin.tsx';
import WeChatLogin from '@/pages/login/WeChatLogin.tsx';
import { useSettingStore } from '@/store/setting.ts';
import { IconFont } from '@nutui/icons-react';

function Login() {
  const { loginType, setLoginType } = useSettingStore();
  return (
    <>
      <div className={'flex flex-col justify-center h-72 items-center'}>
        <div>
          <IconFont fontClassName="iconfont" classPrefix="icon" name="logo" size={48} />
          <span className={'text-4xl pl-4 text-indigo-400'}>星芒AI</span>
        </div>
        <div className={'text-sm text-indigo-300 mt-12'}>能问 能画的AI智能助手</div>
      </div>
      <div className="login-container">
        {loginType === 'password' && <PasswordLogin />}
        {loginType === 'emailCode' && <EmailCodeLogin />}
        {loginType === 'wechat' && <WeChatLogin />}
      </div>
      <div className={'fixed bottom-24 w-full flex flex-col items-center justify-center'}>
        <span className={'text-sm text-gray-400'}>其他登录方式</span>
        <div className={'mt-4 flex justify-center gap-10'}>
          {loginType !== 'wechat' && (
            <IconFont
              fontClassName="iconfont"
              classPrefix="icon"
              name="wechat"
              size={36}
              onClick={() => setLoginType('wechat')}
            />
          )}
          {loginType !== 'password' && (
            <IconFont
              fontClassName="iconfont"
              classPrefix="icon"
              name="password"
              size={36}
              onClick={() => setLoginType('password')}
            />
          )}
          {loginType !== 'emailCode' && (
            <IconFont
              fontClassName="iconfont"
              classPrefix="icon"
              name="email"
              size={36}
              onClick={() => setLoginType('emailCode')}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
