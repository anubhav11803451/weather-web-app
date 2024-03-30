'use client';
import { DailyForecast } from '@/@types/types';
import Card from '../card';
import Image from 'next/image';
import { weatherCodes, weatherIcons } from '@/libs/utils/constants';
import { generateRandomKey, getDayString } from '@/libs/utils/helpers';

export function DailyForecastWidget({ data }: { data: DailyForecast[] }) {
    return (
        <div className='daily-forecast-container w-full sm:w-1/4'>
            <Card className='card-normal'>
                <Card.Body>
                    <h3 className='mb-2.5 text-sm font-semibold uppercase'>7 Day Forecast</h3>
                    {data.map((daily, index) => {
                        const wCode = daily.weather_code;
                        const day = getDayString(daily.date);
                        const key = generateRandomKey();
                        return (
                            <div key={key}>
                                <ul className='grid grid-cols-3 items-center justify-between text-sm'>
                                    <li>{day}</li>
                                    <li className=' flex flex-col items-center'>
                                        <Image
                                            src={`https://openweathermap.org/img/wn/${weatherIcons[weatherCodes[wCode]].day}`}
                                            alt={weatherCodes[wCode]}
                                            height={50}
                                            width={50}
                                        />
                                        <span className='text-center text-xs'>
                                            {weatherCodes[wCode]}
                                        </span>
                                    </li>
                                    <li className='text-end'>
                                        <span className='font-medium'>
                                            {daily.temperature_2m_max}
                                        </span>
                                        /{daily.temperature_2m_min}
                                    </li>
                                </ul>
                                {index !== data.length - 1 && <div className='divider' />}
                            </div>
                        );
                    })}
                </Card.Body>
            </Card>
        </div>
    );
}
