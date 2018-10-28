import { combineReducers } from 'redux';
import authReducer from './authReducer';
import OneDayReducer from './OneDayReducer';
import WeekReducer from './WeekReducer.js';
import MonthReducer from './MonthReducer';

export default combineReducers ({
    activity1m: MonthReducer,
    activity1w: WeekReducer,
    activity1d: OneDayReducer,
    auth: authReducer
});