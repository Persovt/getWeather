import React from 'react'
import { Select } from 'antd';
import store from './redux-store'

const cityList = require('./current.city.list.min.json')
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
                    filterOption={(input, option: any) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                   onChange={onChange}
                >
                {
                    
                    cityList.map((sity: any, index: number) => {
                        
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