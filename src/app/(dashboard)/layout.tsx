import DashboardDrawer from './shared/dashboardDrawer';

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className='dashboard_layout min-h-screen'>
            <DashboardDrawer>{children}</DashboardDrawer>
        </main>
    );
}
