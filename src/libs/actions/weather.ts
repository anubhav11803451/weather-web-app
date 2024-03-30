import env from '@/env';
import { fetchWeatherApi } from 'openmeteo';
import { range } from '../utils/helpers';
const getParams = ({ lat, lon }: { lat: number; lon: number }) => {
    return {
        longitude: lon,
        latitude: lat,
        current: [
            'temperature_2m',
            'relative_humidity_2m',
            'precipitation',
            'rain',
            'weather_code',
        ],
        hourly: ['temperature_2m', 'rain', 'weather_code', 'visibility'],
        daily: ['weather_code', 'sunrise', 'sunset', 'uv_index_max', 'uv_index_clear_sky_max'],
    };
};
export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
    try {
        const url = env.forcastingUrl;
        const responses = await fetchWeatherApi(url, getParams({ lat, lon }));
        // Process first location. Add a for-loop for multiple locations or weather models
        const response = responses[0];

        // Attributes for timezone and location
        const utcOffsetSeconds = response.utcOffsetSeconds();
        // const timezone = response.timezone();
        // const timezoneAbbreviation = response.timezoneAbbreviation();
        // const latitude = response.latitude();
        // const longitude = response.longitude();

        const current = response.current()!;
        const hourly = response.hourly()!;
        const daily = response.daily()!;

        const weatherData = {
            current: {
                time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                temperature2m: current.variables(0)!.value(),
                relativeHumidity2m: current.variables(1)!.value(),
                precipitation: current.variables(2)!.value(),
                rain: current.variables(3)!.value(),
                weatherCode: current.variables(4)!.value(),
            },
            hourly: {
                time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
                    (t) => new Date((t + utcOffsetSeconds) * 1000),
                ),
                temperature2m: hourly.variables(0)!.valuesArray()!,
                rain: hourly.variables(1)!.valuesArray()!,
                weatherCode: hourly.variables(2)!.valuesArray()!,
                visibility: hourly.variables(3)!.valuesArray()!,
            },
            daily: {
                time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
                    (t) => new Date((t + utcOffsetSeconds) * 1000),
                ),
                weatherCode: daily.variables(0)!.valuesArray()!,
                sunrise: daily.variables(1)!.valuesArray()!,
                sunset: daily.variables(2)!.valuesArray()!,
                uvIndexMax: daily.variables(3)!.valuesArray()!,
                uvIndexClearSkyMax: daily.variables(4)!.valuesArray()!,
            },
        };

        return weatherData;
    } catch (error) {
        console.log('error', error);
        throw Error('Failed to fetch get locations');
    }
}
