import { useEffect, useState } from 'react';

const tabBarMap: { [key: number]: string } = {
  0: '/',
  1: '/painting',
  2: '/assist',
  3: '/shop',
  4: '/user',
};

export function getTabBar(value: number): string {
  const result = tabBarMap[value];
  if (result === undefined) {
    console.error(`Unexpected value for tabBar: ${value}`);
    return '/';
  }
  return result;
}

export function useCounter(initCount = 60) {
  const [count, setCount] = useState(initCount);
  const [text, setText] = useState('获取验证码');
  const [isSend, setIsSend] = useState(false);
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isSend && count > 0) {
      intervalId = setInterval(() => {
        setCount((prevState) => prevState - 1);
        setText(`${count}秒后重新发送`);
      }, 1000);
    } else if (count == 0) {
      setIsSend(false);
      setCount(initCount);
      setText('获取验证码');
    }
    return () => clearInterval(intervalId);
  }, [isSend, count, initCount]);

  const handleCounter = () => {
    setIsSend(true);
  };
  return { count, text, handleCounter, isSend };
}

/**
 * base64转blob
 * @param base64Data base64编码的数据
 * @param contentType 内容类型
 */
export function base64ToBlob(base64Data: string, contentType: string) {
  // 去掉base64编码的头部信息（比如 'data:image/png;base64,'部分）
  const byteCharacters = atob(base64Data.split(',')[1]);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, { type: contentType });
}
