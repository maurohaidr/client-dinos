import { GET_DINOS } from '../actions/actions'

const initialState = {
    dinos: undefined,
  }

export default function reducer(state = initialState, action) {
    switch(action.type){
      case GET_DINOS: {
        console.log('reducer ' + action.payload)
        return{
        ...state,
        dinos: action.payload
        }
      }
      default:{
        return state
      }
    }
  }