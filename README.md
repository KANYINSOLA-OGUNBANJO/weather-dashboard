# Weather Dashboard

A responsive weather application built with React and Vite that provides real-time weather data for cities worldwide using the OpenWeatherMap API.

## Live Demo

🌐 **[View Live Site](https://dynamic-creponne-57e016.netlify.app)**

## Features

- **City Search** - Search for weather in any city worldwide with autocomplete suggestions
- **Current Weather** - Display temperature, weather conditions, humidity, wind speed, and pressure
- **5-Day Forecast** - Extended weather forecast with daily summaries
- **Temperature Toggle** - Switch between Celsius and Fahrenheit
- **Recent Searches** - Quick access to previously searched cities (saved in localStorage)
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Loading States** - Visual feedback during API requests
- **Error Handling** - User-friendly error messages for failed requests

## Technologies Used

- **React** - Frontend library for building user interfaces
- **Vite** - Fast build tool and development server
- **OpenWeatherMap API** - Weather data provider
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling and responsive design
- **Netlify** - Deployment and hosting platform

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key

### Setup

1. **Clone the repository**
```bash
   git clone https://github.com/KANYINSOLA-OGUNBANJO/weather-dashboard.git
   cd weather-dashboard
```

2. **Install dependencies**
```bash
   npm install
```

3. **Create environment variables**
   
   Create a `.env` file in the root directory:
```
   VITE_WEATHER_API_KEY=your_api_key_here
```

4. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key
   - Add it to your `.env` file

5. **Start development server**
```bash
   npm run dev
```

6. **Open your browser**
   
   Navigate to `http://localhost:5173`

## Build for Production
```bash
npm run build
```

The production files will be in the `dist` folder.

## Project Structure
```
weather-dashboard-uk/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── CurrentWeather.jsx
│   │   ├── Forecast.jsx
│   │   ├── RecentSearches.jsx
│   │   └── TemperatureToggle.jsx
│   ├── services/
│   │   └── weatherApi.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── .env
├── .gitignore
├── package.json
└── vite.config.js
```

## React Concepts Demonstrated

This project showcases key React concepts:

- **Functional Components** - All components built with modern React patterns
- **Hooks**
  - `useState` - Managing component state
  - `useEffect` - Handling side effects and API calls
- **Props** - Passing data between components
- **Conditional Rendering** - Displaying different UI based on state
- **Event Handling** - User interactions and form submissions
- **Component Composition** - Building complex UIs from simple components
- **API Integration** - Asynchronous data fetching
- **Browser Storage** - localStorage for data persistence

## Component Overview

### SearchBar
- Handles user input for city search
- Provides autocomplete suggestions for popular cities
- Manages search form submission

### CurrentWeather
- Displays current weather conditions
- Shows temperature with weather icon
- Provides detailed metrics (humidity, wind, pressure)

### Forecast
- Displays 5-day weather forecast
- Shows daily temperature and conditions
- Responsive grid layout

### RecentSearches
- Displays history of searched cities
- Allows quick re-search of previous cities
- Persists data using localStorage

### TemperatureToggle
- Switches between Celsius and Fahrenheit
- Visual feedback for active unit

## Environment Variables

This project uses environment variables to secure the API key:

- `VITE_WEATHER_API_KEY` - Your OpenWeatherMap API key

**Important:** Never commit your `.env` file to Git. It's already included in `.gitignore`.

## Deployment

This project is deployed on Netlify with automatic deployments from the main branch.

### Deploy Your Own

1. Fork this repository
2. Connect your GitHub account to Netlify
3. Add environment variable `VITE_WEATHER_API_KEY` in Netlify settings
4. Deploy!

## API Reference

This project uses the [OpenWeatherMap API](https://openweathermap.org/api):

- Current Weather Data API
- 5 Day Weather Forecast API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project was created as part of a Frontend Engineering course - Week 4 Challenge.

## Author

**Kanyinsola Ogunbanjo**

- GitHub: [@KANYINSOLA-OGUNBANJO](https://github.com/KANYINSOLA-OGUNBANJO)

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from OpenWeatherMap
- Built as part of Frontend Engineering Fundamentals Course