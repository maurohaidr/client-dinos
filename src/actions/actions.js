import axios from "axios"

export function getDinos(dino) {
  console.log('actions ' + dino)
  if(dino === undefined) {
    return function(dispatch) {
      dispatch({ type: GET_DINOS, payload: undefined });
    }
  }
    return async function(dispatch) {
      const result = await axios.get("http://localhost:3001/dinos?nombre=" + dino);
      dispatch({ type: GET_DINOS, payload: result.data });
    };
}

export const GET_DINOS = "GET_DINOS"