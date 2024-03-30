export const weatherCodes: Record<number, string> = {
    0: 'Clear sky',
    //1, 2, 3	Mainly clear, partly cloudy, and overcast
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    //45, 48	Fog and depositing rime fog
    45: 'Fog',
    48: 'Depositing rime fog',
    //51, 53, 55	Drizzle: Light, moderate, and dense intensity
    51: 'Drizzle: Light',
    53: 'Drizzle: Moderate',
    55: 'Drizzle: Dense intensity',
    //56, 57	Freezing Drizzle: Light and dense intensity
    56: 'Freezing Drizzle: Light',
    57: 'Freezing Drizzle: Dense intensity',
    //61, 63, 65	Rain: Slight, moderate and heavy intensity
    61: 'Rain: Slight',
    63: 'Rain: Moderate',
    65: 'Rain: Heavy intensity',
    //66, 67	Freezing Rain: Light and heavy intensity
    66: 'Freezing Rain: Light',
    67: 'Freezing Rain: Heavy',
    //71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
    71: 'Snow fall: Slight',
    73: 'Snow fall: Moderate',
    75: 'Snow fall: Heavy intensity',
    //77	Snow grains
    77: 'Snow grains',
    //80, 81, 82	Rain showers: Slight, moderate, and violent
    80: 'Rain showers: Slight',
    81: 'Rain showers: Moderate',
    82: 'Rain showers: Violent',
    //85, 86	Snow showers slight and heavy
    85: 'Snow showers: Slight',
    86: 'Snow showers: Heavy',
    95: 'Thunderstorm: Slight or moderate',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail',
};

//URL is https://openweathermap.org/img/wn/10d@2x.png
export const weatherIcons: Record<string, { day: string; night: string }> = {
    'Clear sky': { day: '01d@2x.png', night: '01n@2x.png' },
    'Mainly clear': { day: '01d@2x.png', night: '01n@2x.png' },
    'Partly cloudy': { day: '02d@2x.png', night: '02n@2x.png' },
    Overcast: { day: '04d@2x.png', night: '04n@2x.png' },
    Fog: { day: '50d@2x.png', night: '50n@2x.png' },
    'Depositing rime fog': { day: '50d@2x.png', night: '50n@2x.png' },
    'Drizzle: Light': { day: '09d@2x.png', night: '09n@2x.png' },
    'Drizzle: Moderate': { day: '09d@2x.png', night: '09n@2x.png' },
    'Drizzle: Dense intensity': { day: '09d@2x.png', night: '09n@2x.png' },
    'Freezing Drizzle: Light': { day: '09d@2x.png', night: '09n@2x.png' },
    'Freezing Drizzle: Dense intensity': { day: '09d@2x.png', night: '09n@2x.png' },
    'Rain: Slight': { day: '10d@2x.png', night: '10n@2x.png' },
    'Rain: Moderate': { day: '10d@2x.png', night: '10n@2x.png' },
    'Rain: Heavy intensity': { day: '10d@2x.png', night: '10n@2x.png' },
    'Freezing Rain: Light': { day: '10d@2x.png', night: '10n@2x.png' },
    'Freezing Rain: Heavy': { day: '10d@2x.png', night: '10n@2x.png' },
    'Snow fall: Slight': { day: '13d@2x.png', night: '13n@2x.png' },
    'Snow fall: Moderate': { day: '13d@2x.png', night: '13n@2x.png' },
    'Snow fall: Heavy intensity': { day: '13d@2x.png', night: '13n@2x.png' },
    'Snow grains': { day: '13d@2x.png', night: '13n@2x.png' },
    'Rain showers: Slight': { day: '09d@2x.png', night: '09n@2x.png' },
    'Rain showers: Moderate': { day: '09d@2x.png', night: '09n@2x.png' },
    'Rain showers: Violent': { day: '09d@2x.png', night: '09n@2x.png' },
    'Snow showers: Slight': { day: '13d@2x.png', night: '13n@2x.png' },
    'Snow showers: Heavy': { day: '13d@2x.png', night: '13n@2x.png' },
    'Thunderstorm: Slight or moderate': { day: '11d@2x.png', night: '11n@2x.png' },
    'Thunderstorm with slight hail': { day: '11d@2x.png', night: '11n@2x.png' },
    'Thunderstorm with heavy hail': { day: '11d@2x.png', night: '11n@2x.png' },
};
