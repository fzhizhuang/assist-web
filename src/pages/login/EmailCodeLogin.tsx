import { Button, Input } from '@nutui/nutui-react';
import { useCounter } from '@/utils';
import { useEffect, useState } from 'react';
import { Regx } from '@/types';

function EmailCodeLogin() {
  const { text, isSend, handleCounter } = useCounter(60);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [codeError, setCodeError] = useState<string | null>(null);
  const [active, setActive] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);

  const handleEmailChange = (e: string) => {
    setEmail(e);
    if (!Regx.email.test(e)) {
      setEmailError(Regx.emailError);
    } else {
      setEmailError(null);
    }
  };

  const handleCodeChange = (e: string) => {
    setCode(e);
    if (!Regx.code.test(e)) {
      setCodeError(Regx.codeError);
    } else {
      setCodeError(null);
    }
  };
  const sendCode = () => {
    if (isSend) return;
    // 发送验证码
    handleCounter();
  };

  useEffect(() => {
    // 检查所有条件是否满足
    const isFormValid = emailError == null && codeError == null && email !== null && code !== null;
    setActive(!isFormValid);
  }, [emailError, codeError, email, code]);
  return (
    <div className={'flex flex-col justify-center items-center'}>
      <div className={'w-full flex justify-center'}>
        <div className={'w-4/5'}>
          <Input
            type={'text'}
            placeholder={'请输入邮箱'}
            value={email === null ? '' : email}
            style={{ border: '1px solid #ccc', borderRadius: '22px', marginTop: '20px' }}
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <span className={'text-sm text-red-400 mt-1'}>{emailError}</span>
          <div className="relative mt-5">
            <Input
              type={'number'}
              placeholder={'请输入验证码'}
              value={code === null ? '' : code}
              className="relative w-full py-2 px-4 border-1px-solid-ccc rounded-22px"
              style={{ border: '1px solid #ccc', borderRadius: '22px' }}
              onChange={(e) => {
                handleCodeChange(e);
              }}
            />
            <span
              className={`absolute right-2 top-1/2 cursor-pointer text-rose-500  transform ${codeError == null ? '-translate-y-1/2' : '-translate-y-full'}`}
              onClick={sendCode}>{text}</span>
            <span className={'text-sm text-red-400 mt-1'}>{codeError}</span>
          </div>
          <Button block type={'primary'} style={{ marginTop: '20px' }} size={'large'} disabled={active}>
            登录
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EmailCodeLogin;
