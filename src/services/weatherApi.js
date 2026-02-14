const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const searchCity = async (city) => {
    try {
        const response = await fetch(
            `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const getForecast = async (city) => {
    try {
        const response = await fetch(
            `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Forecast not available');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const POPULAR_CITIES = [
    'London',
    'New York',
    'Tokyo',
    'Paris',
    'Dubai',
    'Singapore',
    'Sydney',
    'Mumbai',
    'Lagos',
    'Toronto',
    'Manchester',
    'Birmingham',
    'Los Angeles',
    'Chicago',
    'Berlin',
    'Madrid',
    'Rome',
    'Amsterdam',
    'Barcelona',
    'Seoul'
];