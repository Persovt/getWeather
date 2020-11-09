import React from 'react'

export const getWeather = (lat: number, lon: number) => {
    return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&,NC&key=11ad7657a3f04acdae239ef3d91e2974&days=7`)              
      .then(response => response.json())         
      .catch((error) => console.log('Error:  ' + error))         
}