import React from 'react';

function App() {
  const getWeather = (sity: number) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?id=${sity}&appid=86181034ba903cb3066f9d04d1a27943`)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch((error) => console.log('Error:  ' + error))
  }
  getWeather(703448)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
