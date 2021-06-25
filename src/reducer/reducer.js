import { GET_DINOS, SEND_IMG } from '../actions/actions'

const initialState = {
    dinos: undefined,
    img: undefined
  }

export default function reducer(state = initialState, action) {
    switch(action.type){
      case GET_DINOS: {
        return{
        ...state,
        dinos: action.payload
        }
      }
      case SEND_IMG: {
        console.log('reducer ' + action.payload)
        return{
        ...state,
        img: action.payload
        }
      }
      default:{
        return state
      }
    }
  }