import { SearchParamsProps } from '@/@types/types';
import { getWeather } from '@/libs/actions/weather';
import { Metadata } from 'next';
import SearchBar from '@/components/widgets/searchBar';
import DailyForecastWidget from '@/components/widgets/dailyForecast';
import CurrentWeatherWidget from '@/components/widgets/currentWeather';
import OtherStatsWidget from '@/components/widgets/otherStats';
import HourlyForecastWidget from '@/components/widgets/hourlyForecast';

export async function generateMetadata({
    searchParams,
}: {
    searchParams: SearchParamsProps;
}): Promise<Metadata> {
    const { city } = searchParams;

    return {
        title: `${city} - Weather Forecast`,
        description: `${city} weather forecast with current conditions, wind, rain and what to expect for the next 7 days.`,
    };
}

export default async function SearchPage({ searchParams }: { searchParams: SearchParamsProps }) {
    const { lat, lon, city } = searchParams;
    const data = await getWeather({ lat: parseInt(lat!), lon: parseInt(lon!) });

    return (
        <div className='page-container h-full p-6'>
            <ul className='flex size-full flex-col gap-6 '>
                {/* Search */}
                <SearchBar />
                <ul className='weather-details-layout flex size-full flex-row flex-wrap gap-6 sm:flex-nowrap'>
                    <div className='current-weather-container flex w-full flex-col items-center justify-evenly gap-8 sm:w-3/4'>
                        {/* weather layout */}
                        <CurrentWeatherWidget data={data.current} city={city!} />

                        {/* Hourly Forecast */}
                        <HourlyForecastWidget data={data.hourly} />
                        {/* Other Stats */}
                        <OtherStatsWidget data={data.current} />
                    </div>

                    {/* daily forecast */}
                    <DailyForecastWidget data={data.daily} />
                </ul>
            </ul>
        </div>
    );
}
