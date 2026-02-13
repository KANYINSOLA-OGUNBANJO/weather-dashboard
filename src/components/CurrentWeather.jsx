import React from 'react';

function CurrentWeather({ weather, isCelsius }) {
    if (!weather) return null;

    const temperature = isCelsius 
        ? Math.round(weather.main.temp)
        : Math.round((weather.main.temp * 9/5) + 32);

    const feelsLike = isCelsius
        ? Math.round(weather.main.feels_like)
        : Math.round((weather.main.feels_like * 9/5) + 32);

    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

    return (
        <div className="current-weather">
            <div className="weather-main">
                <div className="weather-icon">
                    <img src={iconUrl} alt={weather.weather[0].description} />
                </div>
                <div className="weather-info">
                    <h2 className="city-name">
                        {weather.name}
                        <span className="country"> {weather.sys.country}</span>
                    </h2>
                    <div className="temperature">
                        {temperature}°{isCelsius ? 'C' : 'F'}
                    </div>
                    <div className="weather-description">
                        {weather.weather[0].description}
                    </div>
                </div>
            </div>

            <div className="weather-details">
                <div className="detail-item">
                    <span className="detail-label">Feels like</span>
                    <span className="detail-value">
                        {feelsLike}°{isCelsius ? 'C' : 'F'}
                    </span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Humidity</span>
                    <span className="detail-value">{weather.main.humidity}%</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Wind Speed</span>
                    <span className="detail-value">{weather.wind.speed} m/s</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Pressure</span>
                    <span className="detail-value">{weather.main.pressure} hPa</span>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;