import React, {useState, useEffect} from 'react'
import { Select } from 'antd';
import store from './redux-store'
import {connect} from 'react-redux'
import {getWeather} from './getWeather'
const cityList = require('./current.city.list.min.json')


type Coord = {lat: number, lon: number}
type City = {name: String, coord: Coord, id: number}


const { Option } = Select;


const SELECT_ID = (result: string) => {
    return{
        type: 'SELECT_ID',
        id: result
    }
}


const onChange = (value: string) =>  store.dispatch(SELECT_ID(value))

 const selectCity = () => {
    return (
       
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
        
    )
}




export default selectCity