const MonthState = {};

export default function (state = MonthState, action) {
    switch(action.type) {
        case 'fetchMonth/SUCCESS':
            return action.data;
        case 'fetchMonth/FAILURE':
            return action.error;
        default:
            return state;
    } 
}