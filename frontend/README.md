# 🌦️ Premium Weather Dashboard

A stunning, responsive weather dashboard built with vanilla JavaScript, HTML, and CSS. It features a "Glassmorphism" design, real-time weather data from the OpenWeatherMap API, and a seamless Dark/Light mode toggle.

![Project Preview](https://via.placeholder.com/800x400?text=Premium+Weather+Dashboard+Preview) 
*(Replace this link with a screenshot of your app)*

## ✨ Features

- **Real-Time Weather**: Fetches up-to-the-minute data (Temperature, Wind, Humidity, Conditions) using the OpenWeatherMap API.
- **Premium UI/UX**: Designed with a modern "Glassmorphism" aesthetic, animated background gradients, and smooth transitions.
- **Global Search**: Search specifically for any city worldwide (e.g., "Tokyo", "Paris", "New York").
- **Dark & Light Themes**: Includes a built-in theme toggle that persists user preference via LocalStorage.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Dynamic Icons**: Automatically updates weather icons based on current conditions.

## 🛠️ Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom properties (variables), Flexbox, Grid, Animations, and Media Queries.
- **JavaScript (ES6+)**: Async/Await for API fetching, DOM manipulation, and LocalStorage logic.
- **API**: [OpenWeatherMap](https://openweathermap.org/) (Current Weather Data).

## 🚀 How to Run

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/weather-dashboard.git
    ```
2.  **Navigate to the project folder**:
    ```bash
    cd weather-dashboard
    ```
3.  **Open `index.html`**:
    Simply double-click `index.html` to launch the app in your default browser. No build steps (npm/yarn) functionality required!

## ⚙️ Configuration

To use your own API key:
1.  Get a free API key from [OpenWeatherMap](https://openweathermap.org/).
2.  Open `script.js`.
3.  Replace the `API_KEY` constant with your own key:
    ```javascript
    const API_KEY = 'YOUR_API_KEY_HERE';
    ```

## 📸 Screenshots

| Dark Mode | Light Mode |
|-----------|------------|
| ![Dark Mode](https://via.placeholder.com/400x300?text=Dark+Mode) | ![Light Mode](https://via.placeholder.com/400x300?text=Light+Mode) |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
