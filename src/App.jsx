import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import RecentSearches from './components/RecentSearches';
import TemperatureToggle from './components/TemperatureToggle';
import { searchCity, getForecast } from './services/weatherApi';
import './App.css';

function App() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [recentSearches, setRecentSearches] = useState([]);
    const [isCelsius, setIsCelsius] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem('recentSearches');
        if (saved) {
            setRecentSearches(JSON.parse(saved));
        }
        handleSearch('London');
    }, []);

    useEffect(() => {
        if (recentSearches.length > 0) {
            localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
        }
    }, [recentSearches]);

    const handleSearch = async (city) => {
        setIsLoading(true);
        setError(null);

        try {
            const [weatherData, forecastData] = await Promise.all([
                searchCity(city),
                getForecast(city)
            ]);

            setWeather(weatherData);
            setForecast(forecastData);

            setRecentSearches(prev => {
                const filtered = prev.filter(c => c.toLowerCase() !== city.toLowerCase());
                return [city, ...filtered].slice(0, 5);
            });

        } catch (err) {
            setError(err.message || 'Failed to fetch weather data');
            setWeather(null);
            setForecast(null);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1 className="app-title"> Weather Dashboard</h1>
                <TemperatureToggle 
                    isCelsius={isCelsius} 
                    onToggle={setIsCelsius} 
                />
            </header>

            <div className="container">
                <SearchBar onSearch={handleSearch} isLoading={isLoading} />

                {error && (
                    <div className="error-message">
                        ⚠️ {error}
                    </div>
                )}

                {isLoading && (
                    <div className="loading">
                        <div className="spinner"></div>
                        <p>Loading weather data...</p>
                    </div>
                )}

                {!isLoading && weather && (
                    <>
                        <CurrentWeather weather={weather} isCelsius={isCelsius} />
                        <Forecast forecast={forecast} isCelsius={isCelsius} />
                        <RecentSearches 
                            searches={recentSearches} 
                            onCityClick={handleSearch} 
                        />
                    </>
                )}
            </div>

            <footer className="app-footer">
                <p>Powered by OpenWeatherMap API | Global Weather Dashboard 2026</p>
            </footer>
        </div>
    );
}

export default App;