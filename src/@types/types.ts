export interface Location {
    id: number;
    name: string;
    country: string;
    latitude: number;
    longitude: number;
    timezone: string;
    country_code: string;
    feature_code?: string;
    elevation?: number;
    admin1_id?: number;
    admin2_id?: number;
    country_id?: number;
    admin1?: string;
    admin2?: string;
}

export interface SearchParamsProps {
    lat: string;
    lon: string;
    city: string;
}
