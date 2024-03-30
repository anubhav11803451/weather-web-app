import { Location } from '@/@types/types';
import { proxy } from 'valtio';

export type AppState = {
    sidebar: {
        open: boolean;
        locations?: Location[];
    };
    search: {
        inProgress: boolean;
        cities?: Location[];
        dropdownOpen?: boolean;
    };
};

export const appState = proxy<AppState>({
    sidebar: {
        open: true,
        locations: [],
    },
    search: {
        inProgress: false,
        cities: [],
        dropdownOpen: false,
    },
});
