const initialState = {};

export default function (state = initialState, action) {
    switch(action.type) {
        case 'fetch1Data/SUCCESS':
            return action.data;
        case 'fetch1Data/FAILURE':
            return action.error;
        default:
            return state;
    } 
}