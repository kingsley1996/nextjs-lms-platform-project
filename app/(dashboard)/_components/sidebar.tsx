import { redirect } from 'next/navigation';
import Logo from './logo';
import SidebarRoutes from './sidebar-routes';

export const Sidebar = () => {
  const onClickLogo = () => {
    redirect('/');
  };
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
