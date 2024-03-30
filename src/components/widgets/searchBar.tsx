'use client';

import { getLocation } from '@/libs/actions/location';
import { appAction } from '@/libs/shared/action';
import { appState } from '@/libs/shared/state';
import { formatAddressName } from '@/libs/utils/helpers';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { debounce, isEmpty } from 'lodash';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import { useSnapshot } from 'valtio';

export function SearchBar() {
    const snap = useSnapshot(appState);
    const inProgress = snap.search.inProgress;
    const cities = snap.search.cities;
    const dropdownOpen = snap.search.dropdownOpen;

    const searchLocations = debounce(async (e) => {
        const query = e.target.value;
        if (!isEmpty(query)) {
            appAction.setSearch({ inProgress: true });
            const location = await getLocation({ name: query, count: 100 });
            appAction.setSearch({ inProgress: false, cities: location, dropdownOpen: true });
        }
    }, 500);

    return (
        <div className='top-search-bar w-full sm:w-3/4 '>
            <label className='input flex items-center gap-2'>
                <input
                    type='text'
                    className='grow'
                    placeholder='Search for cities'
                    onInputCapture={searchLocations}
                />
                {inProgress ? (
                    <span className='loading loading-spinner loading-xs' />
                ) : (
                    <MagnifyingGlassIcon className='size-5' />
                )}
            </label>
            {!isEmpty(cities) && (
                <div className={twJoin('dropdown w-full', dropdownOpen && 'dropdown-open')}>
                    <ul className='menu dropdown-content z-10 flex max-h-96 w-full flex-col flex-nowrap overflow-y-auto rounded-box bg-base-100 p-2 shadow-lg'>
                        {cities?.map((city) => (
                            <li
                                key={city.id}
                                onClick={() => {
                                    appAction.setSearch({
                                        inProgress: false,
                                        cities: [],
                                        dropdownOpen: false,
                                    });
                                }}
                            >
                                <Link
                                    href={`/search?lat=${city.latitude}&lon=${city.longitude}&city=${city.name}`}
                                    className='btn btn-ghost w-full justify-start text-start'
                                >
                                    {formatAddressName(city)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchBar;
