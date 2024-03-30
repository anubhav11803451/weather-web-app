import { Location, WeatherData } from '@/@types/types';
import { appState } from './state';

type AppAction = {
    setSearch: (search: { inProgress: boolean; city?: string; cities?: Location[] }) => void;
    toggleDropdown: (value: boolean) => void;
    setFetchWeather: (fetchWeather: { inProgress: boolean; weatherData?: WeatherData }) => void;
};

export const appAction: AppAction = {
    setSearch(search: { inProgress: boolean; city?: string; cities?: Location[] }) {
        appState.search = search;
    },
    toggleDropdown(value: boolean) {
        appState.search.dropdownOpen = value;
    },
    setFetchWeather(fetchWeather: { inProgress: boolean; weatherData?: WeatherData }) {
        appState.fetchWeather = fetchWeather;
    },
};
