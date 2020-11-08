import React, {useState, useEffect}  from 'react';
import {Button, Result} from 'antd'
import { Select ,Card} from 'antd';
import store from './redux-store'
import {useSelector} from 'react-redux'
import { connect } from 'react-redux';
import {mapStateToProps} from './redux-store'
import Weather from './Weather'
const cityList = require('./current.city.list.min.json')
const { Option } = Select;


const ADD_CITY = (result: string) => {
  return{
    type: 'ADD_CITY',
    city: result
  }
}
store.subscribe(()=> {console.log(store.getState())})
const App = () => {
  

 
  type User = any;
 const [cityId, setCityId] = useState<User>()
 



  const onChange = (value: string) =>  setCityId(value)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
     
      getWeather(lat, lng)
       .then(result => {
         console.log(result)
         store.dispatch(ADD_CITY(result))
       })
    })
     
  },[])
  
  
    const getWeather = (lat: number, lon: number) => {
              return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&,NC&key=11ad7657a3f04acdae239ef3d91e2974&days=7`)              
                .then(response => response.json())         
                .catch((error) => console.log('Error:  ' + error))         
  }
  
  
  const addCity = () => {
    
  
    
    let cityCoord = cityList[cityId];
   
    getWeather(cityCoord.coord.lat, cityCoord.coord.lon)
     .then(result => {
     
       store.dispatch(ADD_CITY(result))
     })
     
     
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
    >
     {cityList.map((sity: City, index: number) => {
       return(
        <Option
         key={index} 
         value={index}
        >
            {sity.name}
            </Option>
       )
     })}
  
    </Select>

       <Button type="primary" onClick={addCity}>Add city </Button>

       { store.getState().city.map((city: any, index: number) => {
         return( <Weather props={city} key={index}/>)
       }) }
    </div>
  );
}

export default App;
