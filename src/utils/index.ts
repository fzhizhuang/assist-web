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
  const [count, setCount] = useState(initCount)
  const [text, setText] = useState('获取验证码')
  const [isSend, setIsSend] = useState(false)
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isSend && count > 0) {
      intervalId = setInterval(() => {
        setCount((prevState) => prevState - 1)
        setText(`${count}秒后重新发送`)
      }, 1000)
    } else if (count == 0) {
      setIsSend(false)
      setCount(initCount)
      setText('获取验证码')
    }
    return () => clearInterval(intervalId)
  }, [isSend, count, initCount])

  const handleCounter = () => {
    setIsSend(true)
  }
  return { count, text, handleCounter, isSend }
}