import React from 'react'
import { Select ,Card} from 'antd';
import {connect} from 'react-redux'

const Weather = (props: any) => {  
    let city = props.props.action.city;
    let data = city.data;
    console.log(data, "props!!!!")
        return(
            <Card title={city.city_name}>
                <p>Temp: {data[0].temp}</p>
            </Card>
        )
   
   
}

export default Weather
