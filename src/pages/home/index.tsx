import { Tabbar } from '@nutui/nutui-react';
import { Comment, User, ImageRectangle, Shop, Apps } from '@nutui/icons-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSettingStore } from '@/store/setting.ts';
import { getTabBar } from '@/utils';
import { useEffect } from 'react';
import { getToken } from '@/utils/token.ts';

function Home() {
  const navigate = useNavigate();
  const { activeIndex, setActiveIndex } = useSettingStore();
  const toTarget = (value: number) => {
    setActiveIndex(value);
    const tabBar = getTabBar(value);
    navigate(tabBar);
  };
  // 监听token是否存在，不存在跳转登录页面
  useEffect(() => {
    const token = getToken();
    console.log(`token:${token}`);
    if (token == null) {
      navigate('/login');
    }
  });
  return (
    <div className={'h-screen flex flex-col'}>
      <div className={'flex-1'}>
        <Outlet />
      </div>
      <div>
        <Tabbar
          fixed
          defaultValue={activeIndex}
          onSwitch={(value) => {
            toTarget(value);
          }}
        >
          <Tabbar.Item title="AI对话" icon={<Comment width={20} height={20} />} />
          <Tabbar.Item title="AI绘画" icon={<ImageRectangle width={20} height={20} />} />
          <Tabbar.Item title="发现" icon={<Apps width={20} height={20} />} />
          <Tabbar.Item title="商城" icon={<Shop width={20} height={20} />} />
          <Tabbar.Item title="我的" icon={<User width={20} height={20} />} />
        </Tabbar>
      </div>
    </div>
  );
}

export default Home;
