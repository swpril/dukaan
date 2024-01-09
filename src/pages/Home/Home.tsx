import { Dashboard } from '../../layouts/Dashboard/Dashboard';
import { SideBar } from '../../layouts/SideBar/SideBar';

export const Home = () => {
  return (
    <div className='flex w-full h-screen'>
      <SideBar />
      <Dashboard />
    </div>
  );
};
