const WeekState = {};

export default function (state = WeekState, action) {
    switch(action.type) {
        case 'fetchWeek/SUCCESS':
            return action.data;
        case 'fetchWeek/FAILURE':
            return action.error;
        default:
            return state;
    } 
}