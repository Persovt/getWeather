import React from 'react'
import {Card, Col, Button, Space} from 'antd';

import store from './redux-store';
import {DELETE_CITY} from './reduxTypes'


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
            <Space size={25}>
                <Card title={city.city_name} >
                    {
                      data.map((data: any, index: number) => {                 
                        return(
                          <Space size={25} key={index}>
                            <Card title={data.valid_date}>
                                <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt="weather" width="70"/>
                                <p>Temp: {data.temp}</p>                             
                              </Card>
                            </Space>
                        )
                      })
                    }
                    <Button onClick={deleteWeather}>close</Button>
                </Card>
              </Space>
          </Col>
        )
   
   
}

export default Weather
