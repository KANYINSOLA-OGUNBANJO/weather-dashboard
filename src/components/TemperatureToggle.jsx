import React from 'react';

function TemperatureToggle({ isCelsius, onToggle }) {
    return (
        <div className="temp-toggle">
            <button
                className={`toggle-btn ${isCelsius ? 'active' : ''}`}
                onClick={() => onToggle(true)}
            >
                °C
            </button>
            <button
                className={`toggle-btn ${!isCelsius ? 'active' : ''}`}
                onClick={() => onToggle(false)}
            >
                °F
            </button>
        </div>
    );
}

export default TemperatureToggle;