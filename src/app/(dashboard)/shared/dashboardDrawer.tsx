import { DashboardDrawerContent } from './dashboardDrawerContent';
import DashboardSidebar from './dashboardSidebar';
import { twJoin } from 'tailwind-merge';

export default function DashboardDrawer({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={twJoin('dashboard-drawer drawer', 'lg:drawer-open')}>
            <input id='left-sidebar-drawer' type='checkbox' className='drawer-toggle' />
            <DashboardDrawerContent>{children}</DashboardDrawerContent>
            <DashboardSidebar />
        </div>
    );
}
