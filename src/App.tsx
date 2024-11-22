import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/home';
import Error from '@/pages/error';
import Completion from '@/pages/completion';
import Painting from '@/pages/painting';
import Assist from '@/pages/assist';
import Shop from '@/pages/shop';
import User from '@/pages/user';
import Login from '@/pages/login';

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
          <Route key="user" path="user" element={<User />} />,
        ]}
      />
      <Route key="login" path="login" element={<Login />} />
      <Route key="error" path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
