import { createStore } from "redux";
const initialState = {
    city: []
  }

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CITY': return Object.assign({}, state, {
          city:[...state.city,{action}]
        })
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