document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    const loadingDiv = document.getElementById('loading');
    const weatherDisplay = document.getElementById('weather-display');
    const errorDiv = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');

    // API Configuration
    const API_KEY = 'e904972d44683495a0242af317b64bdf';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    async function fetchWeather(city) {
        // Reset UI
        errorDiv.classList.add('hidden');
        weatherDisplay.classList.add('hidden');
        loadingDiv.classList.remove('hidden');

        try {
            // Construct the exact URL structure requested
            const url = `${API_URL}?q=${encodeURIComponent(city)}&APPID=${API_KEY}&units=metric`;

            const response = await fetch(url);

            if (!response.ok) {
                const errData = await response.json();
                if (response.status === 404) {
                    throw new Error('City not found. Please check the name.');
                } else if (response.status === 401) {
                    throw new Error(`Invalid API Key: ${errData.message}. Please allow time for activation.`);
                } else {
                    throw new Error(errData.message || 'Error fetching weather data.');
                }
            }

            const data = await response.json();
            updateUI(data);

        } catch (error) {
            showError(error.message);
        } finally {
            loadingDiv.classList.add('hidden');
        }
    }

    function updateUI(data) {
        // Extract data based on OpenWeatherMap response structure
        const { name, sys, main, weather, wind } = data;
        const country = sys.country || '';
        const temp = Math.round(main.temp);
        const condition = weather[0] ? weather[0].description : 'Unknown';
        const iconCode = weather[0] ? weather[0].icon : '10d'; // Default to rain if missing

        // Convert Wind Speed from m/s to km/h (1 m/s = 3.6 km/h)
        const windKmh = Math.round(wind.speed * 3.6);

        const humidity = main.humidity;

        // Update DOM elements
        document.getElementById('city-name').textContent = name;
        document.getElementById('country-code').textContent = country;
        document.getElementById('temperature').textContent = temp;
        document.getElementById('condition-text').textContent = condition;

        // Update Icon
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
        const iconImg = document.getElementById('weather-icon');
        iconImg.src = iconUrl;
        iconImg.classList.remove('hidden');

        document.getElementById('wind-speed').textContent = `${windKmh} km/h`;
        document.getElementById('humidity').textContent = `${humidity}%`;

        // Handle Elevation (Not returned by standard OWM weather endpoint)
        const elSpan = document.getElementById('elevation');
        if (elSpan && elSpan.parentElement) {
            elSpan.parentElement.style.display = 'none';
        }

        // Show display
        weatherDisplay.classList.remove('hidden');
    }

    function showError(message) {
        errorText.textContent = message;
        errorDiv.classList.remove('hidden');
    }

    // Event Listeners
    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) fetchWeather(city);
    });

    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const city = cityInput.value.trim();
            if (city) fetchWeather(city);
        }
    });

    /* Theme Toggle Logic */
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check saved preference
    const savedTheme = localStorage.getItem('weather-theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        // Save preference
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('weather-theme', 'light');
        } else {
            localStorage.setItem('weather-theme', 'dark');
        }
    });
});
