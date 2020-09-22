import { ADD_FEATURE } from '../actions/addFeature'
import { REMOVE_FEATURE } from '../actions/removeFeature'

const initialState = {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FEATURE:
            return !state.features.includes(action.payload)?{
                ...state,
                features: [...state.features, action.payload]
            }: state;
        case REMOVE_FEATURE:
            return {
                ...state,
                features: state.features.filter((item)=>item!==action.payload)
            };
        default:
            return state;
    }
}