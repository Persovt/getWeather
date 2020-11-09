import React, {useState, useEffect}  from 'react';
import {Button, Result} from 'antd'
import { Select ,Card} from 'antd';
import store from './redux-store'
import {useSelector} from 'react-redux'
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

const addCity = () => {
  let cityCoord = cityList[store.getState().id.id];

  getWeather(cityCoord.coord.lat, cityCoord.coord.lon)
  .then(result => {
  store.dispatch(ADD_CITY(result))
  })
}


store.subscribe(()=> {console.log(store.getState())})

const App = () => {

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
     
  }, [])
  return (
      <div className="App">
       <SelectCity/>
      {store.subscribe(()=> {console.log(store.getState().id.id, "ID!!!")})}
       <Button type="primary" onClick={addCity} disabled={!(store.getState().id.id >= 0)}>Add city </Button>

       { store.getState().city.map((city: any, index: number) => {
         return( <Weather props={city} key={index}/>)
       }) }
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