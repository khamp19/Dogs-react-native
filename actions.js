import axios from 'axios';

export const GETTING_DATA = 'GETTING_DATA';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

export const getDogs = () => {
  return dispatch => {
    dispatch({type: GETTING_DATA});
    axios.get('https://dog.ceo/api/breed/boxer/images')
      .then((response)=> {
        console.log('got dogs', response.data.message[0]);
        dispatch({type: SUCCESS, dogs: response.data.message});
      })
      .catch((error) => {
        console.log(error);
        dispatch({type: ERROR});
      })
  }
}
