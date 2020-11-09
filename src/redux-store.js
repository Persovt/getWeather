import { createStore } from "redux";


const initialState = {
    
      city: [],
      id: {
        id: -1
      }
   
  }

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CITY': return Object.assign({}, state, {
          city:[...state.city,{action}]
        })
        case 'ADD_CURRECT_CITY': return Object.assign({}, state, {
          city:[{action}, state.city,]
        })
        case 'DELETE_CITY': return Object.assign({}, state, {
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