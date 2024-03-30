import { Location, WeatherData } from '@/@types/types';
import { proxy } from 'valtio';

export type AppState = {
    search: {
        inProgress: boolean;
        city?: string;
        cities?: Location[];
        dropdownOpen?: boolean;
    };
    fetchWeather: { inProgress: boolean; weatherData?: WeatherData };
};

export const appState = proxy<AppState>({
    search: {
        inProgress: false,
        city: undefined,
        cities: [],
        dropdownOpen: false,
    },
    fetchWeather: {
        inProgress: true,
        weatherData: undefined,
    },
});
