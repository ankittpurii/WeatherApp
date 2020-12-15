import {
    LOADING_STATUS,
} from '../types';

const INITIAL_STATE = {
    weatherList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_STATUS:
            return { ...state, loadingStatus: action.payload };
        default:
            return state;
    }
};