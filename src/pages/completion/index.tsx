import '@/styles/completion.css';
import { AddCircle } from '@nutui/icons-react';
import { NavBar, Toast } from '@nutui/nutui-react';

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
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
          <div className={'h-24 bg-amber-50 mt-4'}>消息</div>
        </div>
      </div>
    </>
  );
}

export default Completion;
