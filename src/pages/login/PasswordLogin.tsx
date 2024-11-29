import { Eye, Marshalling } from '@nutui/icons-react';
import { Button, Input } from '@nutui/nutui-react';
import { useEffect, useState } from 'react';
import { Regx } from '@/types';
import { passwordAuthentic } from '@/service/authService.ts';
import { setToken } from '@/utils/token.ts';
import { useNavigate } from 'react-router-dom';

function PasswordLogin() {
  const [showPassword, setShowPassword] = useState('password');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [active, setActive] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleEmailChange = (e: string) => {
    setEmail(e);
    if (!Regx.email.test(e)) {
      setEmailError(Regx.emailError);
    } else {
      setEmailError(null);
    }
  };

  const handlePasswordChange = (e: string) => {
    setPassword(e);
    if (!Regx.password.test(e)) {
      setPasswordError(Regx.passwordError);
    } else {
      setPasswordError(null);
    }
  };

  const resetForm = () => {
    setEmail(null);
    setPassword(null);
    setEmailError(null);
    setPasswordError(null);
  };

  const handleSubmit = () => {
    // 执行登录逻辑
    if (email != null && password != null) {
      passwordAuthentic({
        email: email,
        password: password,
      }).then((res) => {
        console.log('res', res);
        if (res) setToken(res);
        // 跳转主页
        navigate('/');
      });
    }
    resetForm();
  };

  useEffect(() => {
    // 检查所有条件是否满足
    const isFormValid = emailError == null && passwordError == null && email !== null && password !== null;
    setActive(!isFormValid);
  }, [emailError, passwordError, email, password]);

  return (
    <div className={'flex flex-col justify-center items-center'}>
      <div className={'w-full flex justify-center'}>
        <div className={'w-4/5'}>
          <div>
            <Input
              type={'text'}
              placeholder={'请输入邮箱'}
              value={email === null ? '' : email}
              style={{ border: '1px solid #ccc', borderRadius: '22px' }}
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
            <span className={'text-sm text-red-400 mt-1'}>{emailError}</span>
          </div>
          <div className="relative mt-5">
            <Input
              type={showPassword}
              placeholder={'请输入密码'}
              value={password === null ? '' : password}
              className="relative w-full py-2 px-4 border-1px-solid-ccc rounded-22px"
              style={{ border: '1px solid #ccc', borderRadius: '22px' }}
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />
            <div
              className={`absolute right-2 top-1/2 transform ${passwordError == null ? '-translate-y-1/2' : '-translate-y-full'}`}
            >
              {showPassword === 'text' ? (
                <Eye onClick={() => setShowPassword('password')} />
              ) : (
                <Marshalling onClick={() => setShowPassword('text')} />
              )}
            </div>
            <span className={'text-sm text-red-400 mt-1'}>{passwordError}</span>
          </div>
          <Button
            block
            type={'primary'}
            style={{ marginTop: '20px' }}
            size={'large'}
            disabled={active}
            onClick={handleSubmit}
          >
            登录
          </Button>
        </div>
      </div>
      <div className={'w-4/5 text-right pr-3 mt-4'}>
        <span>忘记密码</span>
      </div>
    </div>
  );
}

export default PasswordLogin;
