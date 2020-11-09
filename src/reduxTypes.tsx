
export const SELECT_ID = (result: string) => {
    return{
        type: 'SELECT_ID',
        id: result
    }
}

export const DELETE_CITY = (value: any) => {
    return{
        type: 'DELETE_CITY',
        value: value
    }
  }

 export const ADD_CITY = (result: string) => {
    return{
      type: 'ADD_CITY',
      city: result
    }
  }