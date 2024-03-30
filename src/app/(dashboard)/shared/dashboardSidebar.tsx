'use client';

import Sidebar from '@/components/sidebar';
import { appAction } from '@/libs/shared/action';
import { appState } from '@/libs/shared/state';
import { useSnapshot } from 'valtio';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { Location } from '@/@types/types';

export default function DashboardSidebar() {
    const snap = useSnapshot(appState);
    const locations = snap.sidebar.locations;

    return (
        <Sidebar title='Weather App' onClose={() => appAction.setSidebarOpen()}>
            {/* <Sidebar.Item key='home' label='Home' icon={<HomeIcon className='size-6' />} href='/' /> */}
            {locations?.map((location: Location) => (
                <Sidebar.Item
                    key={location.id}
                    label={location.name}
                    icon={<MapPinIcon className='size-6' />}
                    href={`/${location.id}`}
                />
            ))}
        </Sidebar>
    );
}
