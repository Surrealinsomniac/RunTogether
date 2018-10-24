import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = () => ({
    type: FETCH_USER,
    payload: axios.get('/api/current_user')
 });