import axios from 'axios';
import {FETCH_USER, FETCH_1D_DATA} from './types';

export const fetchUser = () => ({
    type: FETCH_USER,
    payload: axios.get('/api/current_user')
 });

 export const fetch1dData = () => ({
    type: FETCH_1D_DATA,
    payload: axios.get('/api/activity/1d')
    .then((res) => {return console.log(res.data.summary.distances[0])})
 });
console.log(fetchUser())
 console.log(fetch1dData())
// export const fetch1dData = () => async dispatch => {
//     const res = await axios.get('/api/activity/1d');
//     //payload is getting the list of surveys we got from the request right above assigned to const res. So the payload will be an array of all surveys that a current user has sent out.
//     dispatch({ type: FETCH_1D_DATA, payload: res.data })
// }