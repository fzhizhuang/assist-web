import { Image } from '@nutui/nutui-react';
import { useEffect, useState } from 'react';
import { getWxQrCode } from '@/service/authService.ts';

function WeChatLogin() {
  const [wxLoginQrcodeUrl, setWxLoginQrcodeUrl] = useState('');

  // 获取微信登录二维码
  const getWxLoginQrcode = () => {
    getWxQrCode().then((res) => {
      if (res) {
        setWxLoginQrcodeUrl(res.url);
        //setTicket(res.ticket);
      }
    });
  };

  useEffect(() => {
    getWxLoginQrcode();
  }, []);

  return (
    <div>
      {wxLoginQrcodeUrl ? (
        <div className={'flex justify-center items-center'}>
          <Image src={wxLoginQrcodeUrl} width="256" height="256" />
        </div>
      ) : (
        <p className={'text-center'}>正在获取微信登录二维码...</p>
      )}
    </div>
  );
}

export default WeChatLogin;
