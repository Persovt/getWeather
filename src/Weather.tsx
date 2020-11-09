import React from 'react'
import {Card, Col, Button} from 'antd';

import store from './redux-store';

type CoordType = {lat: number, lon: number}
const DELETE_CITY = (value: CoordType) => {
  return{
      type: 'DELETE_CITY',
      value: value
  }
}


const Weather = ({props}:any) => {  

    let city = props.action.city;
    let data = city.data;
   
    
    const deleteWeather = () =>{
    
      const coord = {lat: city.lat, lon: city.lon}
      store.dispatch(DELETE_CITY(coord))
      localStorage.removeItem(city.city_name)

     
    }
  
    
        return(
          <Col >
            <Card title={city.city_name}>
                {
                  data.map((data: any, index: number) => {
                   
                    return(
                      <div key={index}>
                        <p>Data: {data.valid_date} </p>
                        <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt="weather" width="70"/>
                        <p>Temp: {data.temp}</p>
                      </div>
                    )
                  })
                }
                <Button onClick={deleteWeather}>close</Button>
            </Card>
          </Col>
        )
   
   
}

export default Weather
