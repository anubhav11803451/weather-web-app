'use client';

import { DailyForecast, HourlyWeatherData } from '@/@types/types';
import SearchBar from '@/components/widgets/searchBar';
import DailyForecastWidget from '@/components/widgets/dailyForecast';
import CurrentWeatherWidget from '@/components/widgets/currentWeather';
import HourlyForecastWidget from '@/components/widgets/hourlyForecast';
import OtherStatsWidget from '@/components/widgets/otherStats';
import { getWeather } from '@/libs/actions/weather';
import { appAction } from '@/libs/shared/action';
import { appState } from '@/libs/shared/state';
import isUndefined from 'lodash/isUndefined';

import { useEffect } from 'react';
import { useSnapshot } from 'valtio';

export default function Page() {
    const snap = useSnapshot(appState);

    useEffect(() => {
        async function fetchData({ lat, lon }: { lat?: number; lon?: number }) {
            if (!isUndefined(lat) && !isUndefined(lon)) {
                appAction.setFetchWeather({ inProgress: true });
                const data = await getWeather({ lat: lat, lon: lon });
                appAction.setFetchWeather({ inProgress: false, weatherData: data });
            }
        }
        if ('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                fetchData({ lat: latitude, lon: longitude });
            });
        }
    }, []);

    const inProgress = snap.fetchWeather.inProgress!;
    const data = snap.fetchWeather.weatherData!;

    if (inProgress) {
        return (
            <div className='page-container h-full p-6'>
                <ul className='flex size-full flex-col gap-6 '>
                    {/* Search */}
                    <div className='bg skeleton h-10 w-full bg-base-200' />
                    <ul className='weather-details-layout flex size-full flex-row flex-wrap gap-6 sm:flex-nowrap'>
                        <div className='current-weather-container flex w-full flex-col items-center justify-evenly gap-8 sm:w-3/4'>
                            <div className='bg skeleton h-56 w-full bg-base-200' />

                            <div className='bg skeleton h-56 w-full bg-base-200' />

                            <div className='bg skeleton h-44 w-full bg-base-200' />
                        </div>

                        <div className='bg skeleton mb-10 h-96 w-full bg-base-200 sm:w-1/4' />
                    </ul>
                </ul>
            </div>
        );
    }

    return (
        <div className='page-container h-full p-6'>
            <ul className='flex size-full flex-col gap-6 '>
                {/* Search */}
                <SearchBar />
                <ul className='weather-details-layout flex size-full flex-row flex-wrap gap-6 sm:flex-nowrap'>
                    <div className='current-weather-container flex w-full flex-col items-center justify-evenly gap-8 sm:w-3/4'>
                        {/* weather layout */}
                        <CurrentWeatherWidget data={data.current} city={'Current Location'} />

                        {/* Hourly Forecast */}
                        <HourlyForecastWidget data={data.hourly as HourlyWeatherData[]} />
                        {/* Other Stats */}
                        <OtherStatsWidget data={data.current} />
                    </div>

                    {/* daily forecast */}
                    <DailyForecastWidget data={data.daily as DailyForecast[]} />
                </ul>
            </ul>
        </div>
    );
}
