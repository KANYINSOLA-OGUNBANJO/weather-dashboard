import React from 'react';

function RecentSearches({ searches, onCityClick }) {
    if (!searches || searches.length === 0) return null;

    return (
        <div className="recent-searches">
            <h4 className="recent-title">Recent Searches</h4>
            <div className="recent-list">
                {searches.map((city, index) => (
                    <button
                        key={index}
                        onClick={() => onCityClick(city)}
                        className="recent-item"
                    >
                        📍 {city}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default RecentSearches;