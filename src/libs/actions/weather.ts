import env from '@/env';

import { formatWeatherData, getParams } from '../utils/helpers';
import { WeatherData } from '@/@types/types';

export async function getWeather({ lat, lon }: { lat: number; lon: number }): Promise<WeatherData> {
    try {
        const url = env.forcastingUrl + getParams({ lat, lon });
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            const weatherData = formatWeatherData(data);
            return weatherData;
        } else {
            const { reason } = await response.json();
            throw new Error(reason);
        }
    } catch (error) {
        console.log('error', error);
        throw Error('Failed to fetch weather data');
    }
}
