import { Divider, NavBar } from '@nutui/nutui-react';
import { ArrowLeft, ArrowRight } from '@nutui/icons-react';
import { useNavigate } from 'react-router-dom';

/**
 * 账号信息
 * @constructor
 */
export function AccountHome() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <NavBar
          back={
            <>
              <ArrowLeft />
            </>
          }
          onBackClick={() => navigate(-1)}
        >
          账号与安全
        </NavBar>
        <div>
          {/* 我的信息 */}
          <div className={'flex justify-center items-center h-full cursor-pointer'}>
            <div className={'flex flex-col items-center pl-4 rounded-2xl'} style={{ width: '95%' }}>
              <div className={'flex justify-between items-center gap-3 w-full h-10'}
                   onClick={() => navigate('/user/account/bindEmail')}>
                <div className={'text-xl font-medium'}>邮箱绑定</div>
                <div className={'pr-1 flex justify-center items-center'}>
                  <div className={'pr-1'}>
                    <ArrowRight />
                  </div>
                </div>
              </div>
              <Divider />
              <div className={'flex justify-between items-center gap-3 w-full h-10'}
                   onClick={() => navigate('/user/account/bindWx')}>
                <div className={'text-xl font-medium'}>微信绑定</div>
                <div className={'pr-1 flex justify-center items-center'}>
                  <div className={'pr-1'}>
                    <ArrowRight />
                  </div>
                </div>
              </div>
              <Divider />
              <div className={'flex justify-between items-center gap-3 w-full h-10'} onClick={() => navigate('/user/account/setPwd')}>
                <div className={'text-xl font-medium'}>设置密码</div>
                <div className={'pr-1 flex justify-center items-center'}>
                  <div className={'pr-1'}>
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
