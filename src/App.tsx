import React, { useEffect}  from 'react';
import {Button, Row } from 'antd'

import store from './redux-store'

import { connect } from 'react-redux';
import {ADD_CITY} from './reduxTypes'
import Weather from './Weather'
import SelectCity from './selectCity'
import {getWeather} from './getWeather'
const cityList = require('./current.city.list.min.json')


const addCity = () => {
  let cityCoord = cityList[store.getState().id.id].coord;

  getWeather(cityCoord.lat, cityCoord.lon)
  .then(result => {store.dispatch(ADD_CITY(result))
    store.getState().city.map((value: any, key: string) => 
    localStorage.setItem(value.action.city.city_name, JSON.stringify(value))
  )})
}




const App = () => {
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
  
      getWeather(lat, lng)
       .then(result => store.dispatch(ADD_CITY(result)))
    })
    

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if(key){
         let data = localStorage.getItem(key)
         if(data){
          let dataStorage= JSON.parse(data)
          store.dispatch(ADD_CITY(dataStorage.action.city))
         }
        }
    } 
    

  }, [])
  return (
      <div className="App">
       <SelectCity/>
      
       <Button type="primary" onClick={addCity} disabled={!(store.getState().id.id >= 0)}>Add city </Button>
        <Row>
        { store.getState().city.map((city: any, index: any) => {
            
          return( <Weather key={index} props={city}  />)
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