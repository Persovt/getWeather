import React  from 'react';
import {Button} from 'antd'
import { Select } from 'antd';



const cityList = require('./current.city.list.min.json')
const { Option } = Select;
function onChange(value: string) {
  console.log(`selected `, cityList[value].coord);
}

const addCity = () => {
  
}
function App() {

  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    console.log(lat,lng)
    getWeather(lat,lng)
  })

  const getWeather = (lat: number, lon: number) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=86181034ba903cb3066f9d04d1a27943`)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch((error) => console.log('Error:  ' + error))
  }
 
  
  type Coord = {lat: number, lon: number}
  type City = {name: String, coord: Coord, id: number}
  return (
      <div className="App">
        <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
    
      
      // filterOption={(input: string, option: string) =>
      //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      // }
    >
     {cityList.map((sity: City, id: number) => {
       return(
        <Option key={id} value={sity.id}>{sity.name}</Option>
       )
     })}
  
    </Select>

       <Button type="primary" onClick={addCity}>Button</Button>

       
    </div>
  );
}

export default App;
