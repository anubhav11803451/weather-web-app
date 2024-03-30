'use client';

import Card from '@/components/card';
import { getLocation } from '@/libs/actions/location';
import { appAction } from '@/libs/shared/action';
import { appState } from '@/libs/shared/state';
import { formatAddressName } from '@/libs/utils/helpers';
import { debounce, isEmpty } from 'lodash';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import { useSnapshot } from 'valtio';

export default function Page() {
    const snap = useSnapshot(appState);
    const locations = snap.sidebar.locations!;
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
        <div className='page-container h-full'>
            <ul className='flex h-full flex-col items-center justify-center'>
                <div className='container m-auto w-fit'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Search for locations</Card.Title>
                            {/* <Card.Actions> */}
                            <label className='input input-bordered flex items-center gap-2'>
                                <input
                                    type='text'
                                    className='grow'
                                    placeholder='Search'
                                    onInputCapture={searchLocations}
                                />
                                {inProgress ? (
                                    <span className='loading loading-spinner loading-xs' />
                                ) : (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 16 16'
                                        fill='currentColor'
                                        className='size-4 opacity-70'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                )}
                            </label>

                            {!isEmpty(cities) && (
                                <div
                                    className={twJoin('dropdown', dropdownOpen && 'dropdown-open')}
                                >
                                    <ul className='menu dropdown-content z-10 flex max-h-96 w-auto flex-col flex-nowrap overflow-y-auto rounded-box bg-base-100 p-2 shadow-lg'>
                                        {cities?.map((city) => (
                                            <li
                                                key={city.id}
                                                onClick={() => {
                                                    appAction.setLocations([...locations, city]);
                                                    appAction.setSearch({
                                                        inProgress: false,
                                                        cities: [],
                                                        dropdownOpen: false,
                                                    });
                                                }}
                                            >
                                                <Link
                                                    href={`search/?lat=${city.latitude}&lon=${city.longitude}&city=${city.name}`}
                                                    className='btn btn-ghost w-full justify-start text-start'
                                                >
                                                    {formatAddressName(city)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* </Card.Actions> */}
                        </Card.Body>
                    </Card>
                </div>
            </ul>
        </div>
    );
}
