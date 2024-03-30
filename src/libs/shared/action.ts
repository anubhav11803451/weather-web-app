import { Location, WeatherData } from '@/@types/types';
import { appState } from './state';

type AppAction = {
    setSearch: (search: { inProgress: boolean; city?: string; cities?: Location[] }) => void;
    toggleDropdown: () => void;
    setFetchWeather: (fetchWeather: { inProgress: boolean; weatherData?: WeatherData }) => void;
};

export const appAction: AppAction = {
    setSearch(search: { inProgress: boolean; city?: string; cities?: Location[] }) {
        appState.search = search;
    },
    toggleDropdown() {
        appState.search.dropdownOpen = !appState.search.dropdownOpen;
    },
    setFetchWeather(fetchWeather: { inProgress: boolean; weatherData?: WeatherData }) {
        appState.fetchWeather = fetchWeather;
    },
};
