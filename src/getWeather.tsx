

export const getWeather = (lat: number, lon: number) => {
    return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&,NC&key=d3c8fb277de34a28af8a1e5c1c044f55&days=7`)              
      .then(response => response.json())         
      .catch((error) => console.log('Error:  ' + error))         
}
