import { Location, WeatherData } from '@/@types/types';
import { appState } from './state';

type AppAction = {
    setSearch: (search: {
        inProgress: boolean;
        city?: string;
        cities?: Location[];
        dropdownOpen?: boolean;
    }) => void;
    setFetchWeather: (fetchWeather: { inProgress: boolean; weatherData?: WeatherData }) => void;
};

export const appAction: AppAction = {
    setSearch(search: {
        inProgress: boolean;
        city?: string;
        cities?: Location[];
        dropdownOpen?: boolean;
    }) {
        appState.search = search;
    },
    setFetchWeather(fetchWeather: { inProgress: boolean; weatherData?: WeatherData }) {
        appState.fetchWeather = fetchWeather;
    },
};
