import { EmailForm } from '@/components/EmailForm.tsx';
import { Button, NavBar, Toast } from '@nutui/nutui-react';
import { ArrowLeft } from '@nutui/icons-react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/user.ts';
import { useState } from 'react';
import { modifyEmail } from '@/service/userService.ts';

/**
 * 绑定邮箱
 * @constructor
 */
export function BindEmail() {
  const navigate = useNavigate();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const { userInfo } = useUserStore();

  const handleFormSubmit = (email: string, code: string) => {
    console.log(email, code);
    modifyEmail({
      email: email,
      captcha: code,
    }).then(() => {
      Toast.show('绑定邮箱成功');
    });
  };
  return (
    <>
      <NavBar
        back={
          <>
            <ArrowLeft />
          </>
        }
        onBackClick={() => navigate(-1)}
      >
        绑定邮箱
      </NavBar>
      {userInfo?.email ? (
        // 根据showUpdateForm显示绑定邮箱还是更换邮箱
        showUpdateForm ? (
          <EmailForm submitText={'绑定邮箱'} template={'MODIFY_EMAIL'} onSubmit={handleFormSubmit} />
        ) : (
          <div>
            <div className={'text-center text-sm text-gray-500'}>已绑定邮箱：{userInfo?.email}</div>
            <div className={'flex justify-center mt-6'}>
              <Button onClick={() => setShowUpdateForm(true)}>更换邮箱</Button>
            </div>
          </div>
        )
      ) : (
        <div>
          <EmailForm submitText={'绑定邮箱'} template={'MODIFY_EMAIL'} onSubmit={() => Toast.show('修改邮箱成功')} />
        </div>
      )}
    </>
  );
}
