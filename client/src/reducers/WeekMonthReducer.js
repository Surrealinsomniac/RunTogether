const wmState = {};

export default function (state = wmState, action) {
    switch(action.type) {
        case 'fetchWeekMonth/SUCCESS':
            return action.data;
        case 'fetchWeekMonth/FAILURE':
            return action.error;
        default:
            return state;
    } 
}