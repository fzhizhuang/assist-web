import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/home';
import Error from '@/pages/error';
import Completion from '@/pages/completion';
import Painting from '@/pages/painting';
import Assist from '@/pages/assist';
import Shop from '@/pages/shop';
import Login from '@/pages/login';
import { UserInfo } from '@/pages/user/info';
import { User } from '@/pages/user';
import { UserHome } from '@/pages/user/home';
import { AccountSafe } from '@/pages/user/account';
import { AccountHome } from '@/pages/user/account/home';
import { BindEmail } from '@/pages/user/account/setting/BindEmail.tsx';
import { BindWx } from '@/pages/user/account/setting/BindWx.tsx';
import { SetPassword } from '@/pages/user/account/setting/SetPassword.tsx';

function App() {
  return (
    <Routes>
      <Route
        key="home"
        path="/"
        element={<Home />}
        children={[
          <Route key="completion" index={true} element={<Completion />} />,
          <Route key="completion" path="completion" element={<Completion />} />,
          <Route key="painting" path="painting" element={<Painting />} />,
          <Route key="assist" path="assist" element={<Assist />} />,
          <Route key="shop" path="shop" element={<Shop />} />,
          <Route key="user" path="user" element={<User />}>
            <Route key="index" index={true} element={<UserHome />} />
            <Route key="profile" path="profile" element={<UserInfo />} />
            <Route key="account" path="account" element={<AccountSafe />}>
              <Route key="index" index={true} element={<AccountHome />} />
              <Route key="bindEmail" path="bindEmail" element={<BindEmail />} />
              <Route key="bindWx" path="bindWx" element={<BindWx />} />
              <Route key="setPwd" path="setPwd" element={<SetPassword />} />
            </Route>
          </Route>,
        ]}
      />
      <Route key="login" path="login" element={<Login />} />
      <Route key="error" path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
