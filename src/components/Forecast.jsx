import React from 'react';

function Forecast({ forecast, isCelsius }) {
    if (!forecast || !forecast.list) return null;

    const dailyForecasts = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 5);

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { weekday: 'short' });
    };

    const getTemperature = (temp) => {
        return isCelsius 
            ? Math.round(temp)
            : Math.round((temp * 9/5) + 32);
    };

    return (
        <div className="forecast">
            <h3 className="forecast-title">5-Day Forecast</h3>
            <div className="forecast-grid">
                {dailyForecasts.map((day, index) => (
                    <div key={index} className="forecast-card">
                        <div className="forecast-day">{getDayName(day.dt_txt)}</div>
                        <img
                            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].description}
                            className="forecast-icon"
                        />
                        <div className="forecast-temp">
                            {getTemperature(day.main.temp)}°{isCelsius ? 'C' : 'F'}
                        </div>
                        <div className="forecast-desc">
                            {day.weather[0].description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;