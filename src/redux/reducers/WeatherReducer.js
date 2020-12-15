import {
    SET_WEATHER_DATA
} from '../types';

const INITIAL_STATE = {
    weatherList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return { ...state, weatherList: action.payload };
        default:
            return state;
    }
};