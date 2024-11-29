import { Image } from '@nutui/nutui-react';
import { useEffect, useState } from 'react';
import { getWxQrCode, wxAuthentic } from '@/service/authService.ts';
import { setToken } from '@/utils/token.ts';
import { useNavigate } from 'react-router-dom';

function WeChatLogin() {
  const [url, setUrl] = useState('');
  const [ticket, setTicket] = useState('');
  const navigate = useNavigate();

  const getQrCode = () => {
    getWxQrCode().then((res) => {
      if (res) {
        setUrl(res.url);
        setTicket(res.ticket);
      }
    });
  };

  // 轮询扫码状态
  const checkScanStatus = (interval: number, maxAttempts: number) => {
    let attempts = 0;
    // 获取扫码状态
    wxAuthentic({
      ticket: ticket,
    }).then((res) => {
      if (res) {
        // 扫码成功
        console.log('扫码成功');
        setToken(res);
        navigate('/');
      } else if (attempts >= maxAttempts) {
        console.log('扫码超时');
        clearInterval(interval);
      } else {
        attempts++;
        console.log('扫码中...');
      }
    });
  };

  useEffect(() => {
    getQrCode();
    checkScanStatus(2000, 10);
  });

  return (
    <div className={'flex justify-center items-center'}>
      <Image src={url} width="256" height="256" />
    </div>
  );
}

export default WeChatLogin;
