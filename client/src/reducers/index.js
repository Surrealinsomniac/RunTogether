import { combineReducers } from 'redux';
import authReducer from './authReducer';
import OneDayReducer from './OneDayReducer';
import WeekMonthReducer from './WeekMonthReducer.js';

export default combineReducers ({
    activity1wm: WeekMonthReducer,
    activity1d: OneDayReducer,
    auth: authReducer
});