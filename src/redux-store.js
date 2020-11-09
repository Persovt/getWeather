import { createStore } from "redux";


const initialState = {
    
      city: [],
      id: {
        id: -1
      }
   
  }

const weatherReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case 'ADD_CITY':  
        
        const cityFilter = state.city.map((value)=>{
          if(value.action.city.city_name === action.city.city_name)
           return false;
          })
      // console.log((!cityFilter.some((e)=> e===false)) || !state.city)
          if((!cityFilter.some((e)=> e===false)) || !state.city)
           return( Object.assign({}, state, {
             city:[...state.city,{action}]}))
          
       
            
           
       
        case 'DELETE_CITY':    if(action.value) return Object.assign({}, state, {
          city:[...state.city.filter(reminder => {return((reminder.action.city.lat !== action.value.lat) && (reminder.action.city.lon !== action.value.lon))})]
        })
        case 'SELECT_ID': return Object.assign({}, state, {id:action})
        default: return state
    }
  }


let store = createStore(weatherReducer);
 
export const mapStateToProps = state => {
    return {
      todos: weatherReducer(state.state, state.action)
    }
  }

export default store;