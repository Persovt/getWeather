

export const getWeather = (lat: number, lon: number) => {
    return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&,NC&key=405df99ecb8d4295b278fcf9a5c0393f&days=7`)              
      .then(response => response.json())         
      .catch((error) => console.log('Error:  ' + error))         
}
