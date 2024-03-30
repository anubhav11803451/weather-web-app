import { CurrentWeather } from '@/@types/types';
import { weatherCodes, weatherIcons } from '@/libs/utils/constants';
import Image from 'next/image';

export function CurrentWeatherWidget({ data, city }: { data: CurrentWeather; city: string }) {
    const wCode = data.weather_code;
    return (
        <div className='box w-full'>
            <div className='stat'>
                <div className='stat-figure text-primary'>
                    <Image
                        src={`https://openweathermap.org/img/wn/${weatherIcons[weatherCodes[wCode]].day}`}
                        alt={weatherCodes[wCode]}
                        height={100}
                        width={100}
                    />
                    <div className='stat-title text-center'>{weatherCodes[wCode]}</div>
                </div>
                <div className='stat-value'>{city}</div>
                <div className='stat-value text-primary'>
                    {data.temperature_2m.toPrecision(4)}
                    <span className='ml-1 align-text-top text-base'>
                        {data.units['temperature_2m']}
                    </span>
                </div>
                <div className='stat-desc'>
                    Relative Humidity: {data.relative_humidity_2m}
                    {data.units['relative_humidity_2m']}
                </div>
            </div>
        </div>
    );
}

export default CurrentWeatherWidget;
