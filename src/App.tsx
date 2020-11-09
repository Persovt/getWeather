import React, { useEffect}  from 'react';
import {Button, Row } from 'antd'

import store from './redux-store'

import { connect } from 'react-redux';

import Weather from './Weather'
import SelectCity from './selectCity'
import {getWeather} from './getWeather'
const cityList = require('./current.city.list.min.json')

const ADD_CITY = (result: string) => {
  return{
    type: 'ADD_CITY',
    city: result
  }
}
const ADD_CURRECT_CITY = (result: string) => {
  return{
    type: 'ADD_CURRECT_CITY',
    city: result
  }
}

const addCity = () => {
  let cityCoord = cityList[store.getState().id.id].coord;

  getWeather(cityCoord.lat, cityCoord.lon)
  .then(result => {
  store.dispatch(ADD_CITY(result), console.log(result, "result"))
    
   store.getState().city.map((value: any, key: string) => {
   
 
     localStorage.setItem(value.action.city.city_name, JSON.stringify(value))
   })
 
  })
  console.log(localStorage)
}




const App = () => {
  
  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if(key){
         let data = localStorage.getItem(key)
         if(typeof data === 'string'){
          let dataStorage= JSON.parse(data)
          store.dispatch(ADD_CITY(dataStorage.action.city))
         }
        }
    }
      

    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
     
      getWeather(lat, lng)
       .then(result => {
         
         store.dispatch(ADD_CITY(result))
       })
    })
     
  }, [])
  return (
      <div className="App">
       <SelectCity/>
      
       <Button type="primary" onClick={addCity} disabled={!(store.getState().id.id >= 0)}>Add city </Button>
      <Row>
       { store.getState().city.map((city: any, index: any) => {
         
         return( <Weather key={index} props={city} id={index}  />)
       }) }
       </Row>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    city: state.city,
    id: state.id
  };
};



export default connect(mapStateToProps)(App);