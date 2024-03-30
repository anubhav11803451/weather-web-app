import { SearchParamsProps } from '@/@types/types';
import { getWeather } from '@/libs/actions/weather';
import { weatherCodes, weatherIcons } from '@/libs/utils/constants';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({
    searchParams,
}: {
    searchParams: SearchParamsProps;
}): Promise<Metadata> {
    const { city } = searchParams;

    return {
        title: `${city} - Weather Forecast`,
        description: `${city} weather forecast with current conditions, wind, air quality, and what to expect for the next 3 days.`,
    };
}

export default async function SearchPage({ searchParams }: { searchParams: SearchParamsProps }) {
    const { lat, lon } = searchParams;
    const data = await getWeather({ lat: parseInt(lat), lon: parseInt(lon) });
    const wCode = data.current.weatherCode;

    return (
        <div className='page-container h-full'>
            <ul className='flex h-full flex-col px-6 pt-4'>
                <div className='stats shadow'>
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
                        <div className='stat-title'>Today&apos;s weather</div>
                        <div className='stat-value text-primary'>
                            {data.current.temperature2m.toPrecision(4)}
                            <span className='ml-1 align-text-top text-base'>℃</span>
                        </div>
                        <div className='stat-desc'>{new Date().toString()}</div>
                    </div>
                </div>
            </ul>
        </div>
    );
}
