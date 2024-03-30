import { Location } from '@/@types/types';
import { appState } from './state';

type AppAction = {
    setSidebarOpen: () => void;
    setLocations: (locations: Location[]) => void;
    setSearch: (search: {
        inProgress: boolean;
        cities?: Location[];
        dropdownOpen?: boolean;
    }) => void;
};

export const appAction: AppAction = {
    setSidebarOpen() {
        window !== undefined && document.getElementById('left-sidebar-drawer')?.click();
    },
    setLocations(locations: Location[]) {
        appState.sidebar.locations = locations;
    },
    setSearch(search: { inProgress: boolean; cities?: Location[]; dropdownOpen?: boolean }) {
        appState.search = search;
    },
};
