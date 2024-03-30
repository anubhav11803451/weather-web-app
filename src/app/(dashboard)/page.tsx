import { SearchParamsProps } from '@/@types/types';
import Card from '@/components/card';
import { SearchBar } from '@/components/widgets';
import { getWeather } from '@/libs/actions/weather';
import { weatherCodes, weatherIcons } from '@/libs/utils/constants';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({
    searchParams,
}: {
    searchParams: SearchParamsProps;
}): Promise<Metadata> {
    const { city = 'Home' } = searchParams;

    return {
        title: `${city} - Weather Forecast`,
        description: `${city} weather forecast with current conditions, wind, air quality, and what to expect for the next 3 days.`,
    };
}

export default async function Page({ searchParams }: { searchParams: SearchParamsProps }) {
    const { lat, lon } = searchParams;
    const data = await getWeather({ lat: parseInt(lat!), lon: parseInt(lon!) });
    console.log(data.current.units);
    const wCode = data.current.weather_code;
    return (
        <div className='page-container h-full p-6'>
            <ul className='flex size-full flex-col gap-6 '>
                {/* Search */}
                <SearchBar />
                <ul className='weather-details-layout flex size-full flex-row  gap-6'>
                    {/* weather layout */}
                    <div className='current-weather-container w-full sm:w-3/4'>
                        <div className='stats shadow'>
                            <div className='stat'>
                                <div className='stat-figure text-primary'>
                                    <Image
                                        src={`https://openweathermap.org/img/wn/${weatherIcons[weatherCodes[wCode]].night}`}
                                        alt={weatherCodes[wCode]}
                                        height={100}
                                        width={100}
                                    />
                                    <div className='stat-title text-center'>
                                        {weatherCodes[wCode]}
                                    </div>
                                </div>
                                <div className='stat-title'>Today&apos;s weather</div>
                                <div className='stat-value text-primary'>
                                    {data.current.temperature_2m.toPrecision(4)}
                                    <span className='ml-1 align-text-top text-base'>
                                        {data.current.units['temperature_2m']}
                                    </span>
                                </div>
                                <div className='stat-desc'>{new Date().toString()}</div>
                            </div>
                        </div>
                    </div>

                    {/* daily forecast */}
                    <div className='daily-forecast-container w-full sm:w-1/4'>
                        <Card>
                            <Card.Body>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                                <Card.Title>Daily Forecast</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </ul>
            </ul>
        </div>
    );
}
