import { Location } from '@/@types/types';

export function formatAddressName(location: Location): string {
    let formattedName = '';

    // Add name and any defined admin levels
    if (location.name) {
        formattedName += location.name;
    }
    if (location.admin2) {
        formattedName += ', ' + location.admin2;
    }
    if (location.admin1) {
        formattedName += ', ' + location.admin1;
    }

    // Always add country at the end
    if (formattedName.length > 0) {
        // Check if there's any content before adding comma
        formattedName += ', ';
    }
    formattedName += location.country;

    return formattedName.trim();
}

// Helper function to form time ranges
export const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
