// Note: Any env values starting with NEXT_PUBLIC_ will be replaced with actual value during build time
// and mostly will be exposed to clients.

const env = {
    nodeEnv: process.env.NODE_ENV ?? 'development',
    forcastingUrl: process.env.FORCASTING_URL ?? 'https://api.open-meteo.com/v1/forecast',
    geocodingUrl: process.env.GEOCODING_URL ?? 'https://geocoding-api.open-meteo.com/v1/search',
};

export default env;
