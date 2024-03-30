export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <main className='dashboard_layout min-h-screen bg-base-300'>{children}</main>;
}
