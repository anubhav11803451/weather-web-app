export interface Location {
    id: number;
    name: string;
    country: string;
    latitude: number;
    longitude: number;
    timezone: string;
    country_code: string;
    feature_code?: string;
    elevation?: number;
    admin1_id?: number;
    admin2_id?: number;
    country_id?: number;
    admin1?: string;
    admin2?: string;
}

export interface SearchParamsProps {
    lat?: string;
    lon?: string;
    city?: string;
}

export interface WeatherData {
    current: CurrentWeather;
    daily: DailyForecast[];
    hourly: HourlyWeatherData[];
}

export type Units = Record<string, string>;
export interface CurrentWeather {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    cloud_cover: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    units: Units;
}

export interface DailyForecast {
    date: string;
    weather_code: number;
    temperature_2m_max: number;
    temperature_2m_min: number;
    sunrise: string;
    sunset: string;
    uv_index_max: number;
    uv_index_clear_sky_max: number;
    units: Units;
}

export interface HourlyWeatherData {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    precipitation_probability: number;
    precipitation: number;
    weather_code: number;
    visibility: number;
    wind_speed_10m: number;
    wind_direction_80m: number;
    uv_index?: string;
    freezing_level_height: number;
    units: Units;
}
