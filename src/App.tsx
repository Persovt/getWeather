import React  from 'react';
import {Button, Result} from 'antd'
import { Select ,Card} from 'antd';



const cityList = require('./current.city.list.min.json')
const { Option } = Select;
function onChange(value: string) {
  console.log(value)
  console.log(`selected `, cityList[value].coord);
}

const addCity = () => {
  
}
function App() {

  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
   
    getWeather(lat,lng)
  })

  const getWeather = (lat: number, lon: number) => {
   
   
    
              fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&,NC&key=11ad7657a3f04acdae239ef3d91e2974&days=7`)
                
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
     {cityList.map((sity: City, index: number) => {
       return(
        <Option key={index} value={index}>{sity.name}</Option>
       )
     })}
  
    </Select>

       <Button type="primary" onClick={addCity}>Add city </Button>

       <Card title="Currect city">
          <p>Card content</p>
        
        </Card>
       
    </div>
  );
}

export default App;
