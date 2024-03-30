'use client';
import { HourlyWeatherData } from '@/@types/types';
import Card from '../card';
import Image from 'next/image';
import { weatherCodes, weatherIcons } from '@/libs/utils/constants';
import { generateRandomKey } from '@/libs/utils/helpers';

export function HourlyForecastWidget({ data }: Readonly<{ data: HourlyWeatherData[] }>) {
    return (
        <div className='daily-forecast-container w-full'>
            <Card className='card-normal w-full'>
                <Card.Body>
                    <h3 className='mb-2.5 text-sm font-semibold uppercase'>Hourly Forecast</h3>
                    <ul className='flex flex-row overflow-auto'>
                        {data.map((daily, index) => {
                            const wCode = daily.weather_code;
                            const suffix = daily.is_day ? 'day' : 'night';
                            const time = new Date(daily.time).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                            });
                            const key = generateRandomKey();
                            return (
                                <div key={key}>
                                    <ul className='flex w-28 flex-col items-center justify-between text-sm'>
                                        <li>{time}</li>
                                        <li className=' flex flex-col items-center'>
                                            <Image
                                                src={`https://openweathermap.org/img/wn/${weatherIcons[weatherCodes[wCode]][suffix]}`}
                                                alt={weatherCodes[wCode]}
                                                height={80}
                                                width={80}
                                            />
                                            <span className='text-center text-xs'>
                                                {weatherCodes[wCode]}
                                            </span>
                                        </li>
                                        <li className='text-center'>{daily.temperature_2m}</li>
                                    </ul>
                                    {index !== data.length - 1 && (
                                        <div className='divider divider-horizontal' />
                                    )}
                                </div>
                            );
                        })}
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
}

export default HourlyForecastWidget;
