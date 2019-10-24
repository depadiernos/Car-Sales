import { UPDATE_TOTAL } from '../actions/updateTotal'

const initialState = 0

export function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TOTAL:
            return state + action.payload;
        default:
            return state;
    }
}