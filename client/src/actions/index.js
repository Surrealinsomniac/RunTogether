import axios from 'axios';
import {FETCH_USER, FETCH_1D_DATA} from './types';

export const fetchUser = () => ({
    type: FETCH_USER,
    payload: axios.get('/api/current_user')
 });

 export const fetch1dData = () => ({
    type: FETCH_1D_DATA,
    payload: axios.get('/api/activity/1d')
    .then((res) => {return console.log("RESPONSE", res.data.summary.distances[0])})
 });
console.log(fetchUser())
 console.log(fetch1dData())
