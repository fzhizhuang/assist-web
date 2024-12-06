import { ArrowLeft } from '@nutui/icons-react';
import { Button, NavBar, Toast } from '@nutui/nutui-react';
import { useNavigate } from 'react-router-dom';
import { PasswordInput } from '@/components/PasswordInput.tsx';
import { useState } from 'react';
import { Regx } from '@/types';
import { modifyPassword } from '@/service/userService.ts';

/**
 * 设置密码
 * @constructor
 */
export function SetPassword() {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handlePasswordChange = (e: string) => {
    setPassword(e);
    if (!Regx.password.test(e)) {
      setPasswordError(Regx.passwordError);
    } else {
      setPasswordError(null);
    }
  };
  const handleConfirmPasswordChange = (e: string) => {
    setConfirmPassword(e);
    if (!Regx.password.test(e)) {
      setConfirmPasswordError(Regx.passwordError);
    } else if (e !== password) {
      setConfirmPasswordError('两次密码不一致');
    } else {
      setConfirmPasswordError(null);
    }
  };

  const handleSubmit = () => {
    // 成功，重置密码
    modifyPassword({
      password: password,
      confirmPassword: confirmPassword,
    }).then(() => {
      Toast.show('密码设置成功');
      setPassword('');
      setConfirmPassword('');
    });
  };

  return (
    <div>
      <NavBar
        back={
          <>
            <ArrowLeft />
          </>
        }
        onBackClick={() => navigate(-1)}
      >
        设置密码
      </NavBar>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="text-sm text-gray-500">设置密码，方便您后续登录</div>
        <div className="mt-4 flex flex-col justify-center items-center">
          <PasswordInput
            field={password}
            placeholder={'请输入密码'}
            handleFieldChange={(e) => handlePasswordChange(e)}
            setPasswordError={() => setPasswordError}
            passwordError={passwordError}
            style={{ width: '328px', border: '1px solid #ccc', borderRadius: '22px' }}
          />
          <PasswordInput
            field={confirmPassword}
            placeholder={'请再次输入密码'}
            handleFieldChange={(e) => handleConfirmPasswordChange(e)}
            setPasswordError={() => setConfirmPasswordError}
            passwordError={confirmPasswordError}
            style={{ width: '328px', border: '1px solid #ccc', borderRadius: '22px' }}
          />
          <Button block type="primary" size="large" style={{ marginTop: '20px' }} onClick={() => handleSubmit()}>
            确定
          </Button>
        </div>
      </div>
    </div>
  );
}
