import '@/styles/completion.scss';
import { AddCircle } from '@nutui/icons-react';
import { Avatar, Ellipsis, NavBar, Toast } from '@nutui/nutui-react';

function Completion() {
  return (
    <>
      <div className={'completion-container'}>
        <NavBar
          style={{ marginBottom: 0, background: '#fff' }}
          right={
            <span className="flex-center" onClick={() => Toast.show('icon')}>
              <AddCircle />
            </span>
          }
        >
          对话
        </NavBar>
        <div className={'completion-content overflow-auto'}>
          <div className={'h-20 bg-gray-100 mt-4 flex justify-start gap-5 items-center pl-4'}>
            <Avatar
              size="large"
              src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
            />
            <div className={'flex-col justify-between'}>
              <span className={'text-lg font-semibold'}>智能对话小助手</span>
              <div className={'text-base'}>
                <Ellipsis content={'你好，我是张三，请问你叫什么名字？'} direction="end" />
              </div>
            </div>
          </div>
          <div className={'h-20 mt-4 flex justify-start gap-5 items-center pl-4'}>
            <Avatar
              size="large"
              src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
            />
            <div className={'flex-col justify-between'}>
              <span className={'text-lg font-semibold'}>智能对话小助手</span>
              <div className={'text-base'}>
                <Ellipsis content={'你好，我是张三，请问你叫什么名字？'} direction="end" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Completion;
