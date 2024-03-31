import {
    CurrentWeather,
    DailyForecast,
    HourlyWeatherData,
    Location,
    WeatherData,
} from '@/@types/types';

export function formatAddressName(location: Location): string {
    let formattedName = '';

    // Add name and any defined admin levels
    if (location.name) {
        formattedName += location.name;
    }
    if (location.admin2) {
        formattedName += ', ' + location.admin2;
    }
    if (location.admin1) {
        formattedName += ', ' + location.admin1;
    }

    // Always add country at the end
    if (formattedName.length > 0) {
        // Check if there's any content before adding comma
        formattedName += ', ';
    }
    formattedName += location.country;

    return formattedName.trim();
}

// Helper function to form time ranges
export const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

export const getParams = ({ lat, lon }: { lat: number; lon: number }) => {
    const latitude = lat;
    const longitude = lon;
    const currentParams = [
        'temperature_2m',
        'relative_humidity_2m',
        'apparent_temperature',
        'precipitation',
        'rain',
        'showers',
        'snowfall',
        'weather_code',
        'cloud_cover',
        'wind_speed_10m',
        'wind_direction_10m',
        'is_day',
    ].join(',');
    const hourly = [
        'temperature_2m',
        'relative_humidity_2m',
        'precipitation_probability',
        'precipitation',
        'weather_code',
        'visibility',
        'wind_speed_10m',
        'wind_direction_80m',
        'uv_index',
        'freezing_level_height',
        'is_day',
    ].join(',');
    const dailyParams = [
        'weather_code',
        'temperature_2m_max',
        'temperature_2m_min',
        'sunrise',
        'sunset',
        'uv_index_max',
        'uv_index_clear_sky_max',
    ].join(',');

    return `?latitude=${latitude}&longitude=${longitude}&current=${currentParams}&daily=${dailyParams}&hourly=${hourly}&timezone=auto`;
};

export function formatWeatherData(data: any): WeatherData {
    const current: CurrentWeather = {
        time: data.current.time,
        temperature_2m: data.current.temperature_2m,
        relative_humidity_2m: data.current.relative_humidity_2m,
        apparent_temperature: data.current.apparent_temperature,
        precipitation: data.current.precipitation,
        rain: data.current.rain,
        showers: data.current.showers,
        snowfall: data.current.snowfall,
        cloud_cover: data.current.cloud_cover,
        weather_code: data.current.weather_code,
        wind_speed_10m: data.current.wind_speed_10m,
        wind_direction_10m: data.current.wind_direction_10m,
        is_day: data.current.is_day === 0 ? false : true,
        units: data.current_units,
    };

    const hourly: HourlyWeatherData[] = data.hourly.time
        .slice(0, 25)
        .map((time: string, index: number) => ({
            time: time,
            temperature_2m: data.hourly.temperature_2m[index],
            relative_humidity_2m: data.hourly.relative_humidity_2m[index],
            precipitation_probability: data.hourly.precipitation_probability[index],
            precipitation: data.hourly.precipitation[index],
            weather_code: data.hourly.weather_code[index],
            visibility: data.hourly.visibility[index],
            wind_speed_10m: data.hourly.wind_speed_10m[index],
            wind_direction_80m: data.hourly.wind_direction_80m[index],
            uv_index: data.hourly.uv_index[index],
            freezing_level_height: data.hourly.freezing_level_height[index],
            is_day: data.hourly.is_day[index] === 0 ? false : true,
            units: data.hourly_units,
        }));

    const daily: DailyForecast[] = data.daily.time.map((date: string, index: number) => ({
        date: date,
        weather_code: data.daily.weather_code[index],
        temperature_2m_max: data.daily.temperature_2m_max[index],
        temperature_2m_min: data.daily.temperature_2m_min[index],
        sunrise: data.daily.sunrise[index],
        sunset: data.daily.sunset[index],
        uv_index_max: data.daily.uv_index_max[index],
        uv_index_clear_sky_max: data.daily.uv_index_clear_sky_max[index],
        units: data.daily_units,
    }));

    return { current, daily, hourly };
}

export function getDayString(dateString: string): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const today = new Date();

    if (date.toDateString() === today.toDateString()) {
        return 'Today';
    } else {
        return days[date.getDay()];
    }
}

export function generateRandomKey() {
    // Generates a random string of alphanumeric characters
    return Math.random().toString(36).substring(2);
}
