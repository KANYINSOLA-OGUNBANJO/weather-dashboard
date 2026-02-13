const API_KEY = 'd12423bc5815f62f33cccf1d20e3f3c9';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const searchCity = async (city) => {
    try {
        const response = await fetch(
            `${BASE_URL}/weather?q=${city},GB&appid=${API_KEY}&units=metric`
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
            `${BASE_URL}/forecast?q=${city},GB&appid=${API_KEY}&units=metric`
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

export const UK_CITIES = [
    'London',
    'Manchester',
    'Birmingham',
    'Liverpool',
    'Leeds',
    'Sheffield',
    'Bristol',
    'Edinburgh',
    'Glasgow',
    'Cardiff'
];