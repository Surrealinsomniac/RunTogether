//understand reducers more
import { FETCH_USER } from '../actions/types';

//auth reducer is here to decide whether the user is currently logged in
//this reducer returns null if we dont know if a user is logged in, user model is the user is logged in or false if noone is logged in.
const initialState = {
    isAuthenticated: false,
    attemptingAuth: false
};

export default function (state = initialState, action){
    console.log(action);
    switch (action.type) {
    //    case FETCH_USER:
    //         return action.payload || false;
        case 'FETCH_USER_PENDING': {
            return { ...state, attemptingAuth: true }
        }
        case 'FETCH_USER_FULFILLED': {
            return { ...state, isAuthenticated: true, attemptingAuth: false };
        }
        case 'FETCH_USER_REJECTED': {
            return { ...state, isAuthenticated: false, attemptingAuth: false };
        }
       default:
            return state;
    }
}