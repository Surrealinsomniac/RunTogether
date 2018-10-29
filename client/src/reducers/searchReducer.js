const initialState = [];

export default function (state = initialState, action) {
    switch(action.type) {
        case 'fetchUsers/SUCCESS':
            return action.data;
        case 'fetchUsers/FAILURE':
            return action.error;
        default:
            return state;
    } 
}