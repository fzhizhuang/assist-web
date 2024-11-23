import { Avatar, AvatarCropper, NavBar, Toast } from '@nutui/nutui-react';
import { ArrowLeft, ArrowRight, Edit } from '@nutui/icons-react';
import { useState } from 'react';

function User() {
  const [imageUrl, setImageUrl] = useState(
    'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png',
  );
  const cutImage = (data: string) => {
    console.log('裁剪后的图片', data);
    setImageUrl(data);
  };
  return <>
    <div className={'h-full bg-neutral-50 overflow-scroll'}>
      <div>
        <NavBar
          style={{ marginBottom: 0, background: '#fff' }}
          back={
            <>
              <ArrowLeft />
              返回
            </>
          }
          onBackClick={() => Toast.show('返回')}
        >
          个人中心
        </NavBar>
      </div>
      {/* 个人信息 */}
      <div className={'flex justify-center items-center h-36 mt-3 cursor-pointer'}>
        <div className={'flex justify-start items-center gap-5 pl-4 h-36 rounded-2xl'}
             style={{ width: '95%', background: '#fff' }}>
          {/* 头像剪切 */}
          <AvatarCropper shape="round" onConfirm={cutImage} editText>
            <Avatar size={'72'} shape="round" src={imageUrl} />
          </AvatarCropper>
          <div className={'flex flex-col gap-4'}>
            <div className={'flex justify-start items-center gap-2'}>
              <span className={'text-lg font-semibold'}>惯性失眠</span>
              <Edit height={24} width={24} />
            </div>
            <div className={'flex justify-between items-center gap-2'}>
              <div className={'flex flex-col gap-1 justify-center items-center'}>
                <div className={'text-xl font-semibold'}>24</div>
                <div className={'text-sm text-slate-600'}>总额度</div>
              </div>
              <div className={'flex flex-col gap-1 justify-center items-center'}>
                <div className={'text-xl font-semibold'}>24</div>
                <div className={'text-sm text-slate-600'}>剩余额度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 我的订单 */}
      <div className={'flex justify-center items-center h-16 mt-3 cursor-pointer'}>
        <div className={'flex justify-start items-center gap-5 pl-4 h-16 rounded-2xl'}
             style={{ width: '95%', background: '#fff' }}>
          <div className={'flex justify-between items-center gap-2 w-full'}>
            <div className={'text-xl font-medium'}>我的订单</div>
            <div className={'pr-1'}><ArrowRight /></div>
          </div>
        </div>
      </div>
      {/* 我的信息 */}
      <div className={'flex justify-center items-center h-64 mt-3 cursor-pointer'}>
        <div className={'flex flex-col items-center gap-5 pl-4 h-64 rounded-2xl'}
             style={{ width: '95%', background: '#fff' }}>
          <div className={'flex justify-between items-center gap-3 w-full h-16'} >
            <div className={'text-xl font-medium'}>个人资料</div>
            <div className={'pr-1'}><ArrowRight /></div>
          </div>
          <div className={'flex justify-between items-center gap-3 w-full h-16'} >
            <div className={'text-xl font-medium'}>账号与安全</div>
            <div className={'pr-1'}><ArrowRight /></div>
          </div>
          <div className={'flex justify-between items-center gap-3 w-full h-16'} >
            <div className={'text-xl font-medium'}>外观设置</div>
            <div className={'pr-1'}><ArrowRight /></div>
          </div>
          <div className={'flex justify-between items-center gap-3 w-full h-16'}>
            <div className={'text-xl font-medium'}>语言设置</div>
            <div className={'pr-1'}><ArrowRight /></div>
          </div>
        </div>
      </div>
      {/* 退出登录 */}
      <div className={'flex justify-center items-center h-16 mt-3 cursor-pointer'}>
        <div className={'flex justify-start items-center gap-5 pl-4 h-16 rounded-2xl'}
             style={{ width: '95%', background: '#fff' }}>
          <div className={'flex justify-between items-center gap-2 w-full'}>
            <div className={'text-xl font-medium'}>退出登录</div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default User;
