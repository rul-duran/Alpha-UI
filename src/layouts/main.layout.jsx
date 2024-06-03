import { Outlet } from 'react-router-dom';
import { Navbar } from '@components';

const MainLayout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </>
);

export default MainLayout;
