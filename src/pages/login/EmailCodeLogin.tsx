import { Button, Input } from '@nutui/nutui-react';

function EmailCodeLogin() {
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
              type={'number'}
              placeholder={'请输入验证码'}
              className="relative w-full py-2 px-4 border-1px-solid-ccc rounded-22px"
              style={{ border: '1px solid #ccc', borderRadius: '22px' }}
            />
            <span className={'absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-rose-500'}
                  onClick={() => {
                    console.log('发送验证码');
                  }}>获取验证码</span>
          </div>
          <Button block type={'primary'} style={{ marginTop: '20px' }}>
            登录
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EmailCodeLogin;
