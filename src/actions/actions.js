import axios from "axios"

export function getDinos(dino) {
  if(dino === undefined) {
    return function(dispatch) {
      dispatch({ type: GET_DINOS, payload: undefined });
    }
  }
    return async function(dispatch) {
      const result = await axios.get("https://server-dinos.herokuapp.com/dinos?nombre=" + dino);
      dispatch({ type: GET_DINOS, payload: result.data });
    };
}
export function sendImg(img) {
  console.log('actions' + img)
  return function(dispatch) {
    console.log('actions 2' + img)
    dispatch({ type: SEND_IMG, payload:img})
  }
}
export const SEND_IMG = 'SEND_IMG'
export const GET_DINOS = "GET_DINOS"