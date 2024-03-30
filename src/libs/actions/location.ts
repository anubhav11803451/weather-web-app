import { Location } from '@/@types/types';
import env from '@/env';
import { sortBy } from 'lodash';

import get from 'lodash/get';

export async function getLocation({
    name = 'gorakhpur',
    count = 100,
}: {
    name?: string;
    count?: number;
}): Promise<Location[] | undefined> {
    try {
        let url = env.geocodingUrl + `?name=${name}` + '&language=en&format=json';
        if (count) {
            url = url.concat(`&count=${count}`);
        }
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const results = get(data, 'results');
            const locations: Location[] = sortBy(results, ['timezone']);
            return locations;
        } else {
            const { reason } = await response.json();
            throw new Error(reason);
        }
    } catch (error) {
        console.log('error', error);
        throw Error('Failed to fetch get locations');
    }
}
