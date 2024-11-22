import { Eye, Marshalling } from '@nutui/icons-react';
import { Button, Input } from '@nutui/nutui-react';
import { useState } from 'react';

function PasswordLogin() {
  const [showPassword, setShowPassword] = useState('password');
  return (
    <div className={'flex flex-col justify-center items-center'}>
      <div className={'w-full flex justify-center'}>
        <div className={'w-4/5'}>
          <Input
            type={'text'}
            placeholder={'请输入邮箱'}
            style={{ border: '1px solid #ccc', borderRadius: '22px', marginTop: '20px' }}
          />
          <div className="relative mt-5">
            <Input
              type={showPassword}
              placeholder={'请输入密码'}
              className="relative w-full py-2 px-4 border-1px-solid-ccc rounded-22px"
              style={{ border: '1px solid #ccc', borderRadius: '22px' }}
            />
            <div className={'absolute right-2 top-1/2 transform -translate-y-1/2'}>
              {showPassword === 'text' ? (
                <Eye onClick={() => setShowPassword('password')} />
              ) : (
                <Marshalling onClick={() => setShowPassword('text')} />
              )}
            </div>
          </div>
          <Button block type={'primary'} style={{ marginTop: '20px' }} size={'large'}>
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
