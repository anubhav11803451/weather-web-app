import { PropsWithChildren } from 'react';

export const DashboardDrawerContent: React.FC<PropsWithChildren> = function ({ children }) {
    return (
        <section className='dashboard-drawer-content drawer-content min-h-screen bg-base-200'>
            {children}
        </section>
    );
};
