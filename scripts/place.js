document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
  
    // Find the span element with the ID "currentyear"
    const yearSpan = document.getElementById('currentyear');
  
    // Update the content of the span element with the current year
    yearSpan.textContent = currentYear;
});

document.addEventListener("DOMContentLoaded", function () {
    // Last modified information
    const lastModified = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
});

function fetchWeather() {

    const temperature = 18;
    const condition = "Cloudy";
    const windSpeed = 13;
    const windchill= 'N/A';

    // Update the DOM with weather information
    document.getElementById('temperature').textContent = temperature + " °C";
    document.getElementById('condition').textContent = condition;
    document.getElementById('wind-speed').textContent = windSpeed + " m/s";
    document.getElementById('wind-chill').textContent = windchill;
}

window.addEventListener('load', fetchWeather);