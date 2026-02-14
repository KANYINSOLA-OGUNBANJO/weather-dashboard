import React, { useState } from 'react';
import { POPULAR_CITIES } from '../services/weatherApi';

function SearchBar({ onSearch, isLoading }) {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setCity(value);

        if (value.length > 0) {
            const filtered = POPULAR_CITIES.filter(c =>
                c.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setCity(suggestion);
        onSearch(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        value={city}
                        onChange={handleInputChange}
                        placeholder="Search any city worldwide (e.g., London, New York, Tokyo...)"
                        className="search-input"
                        disabled={isLoading}
                    />
                    <button 
                        type="submit" 
                        className="search-button"
                        disabled={isLoading || !city.trim()}
                    >
                        {isLoading ? '⏳' : '🔍'}
                    </button>
                </div>
                {suggestions.length > 0 && (
                    <ul className="suggestions">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="suggestion-item"
                            >
                                📍 {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    );
}

export default SearchBar;