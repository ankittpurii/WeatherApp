import { executeGetRequest } from '../../utils/APIUtils';
import { LOADING_STATUS, SET_WEATHER_DATA } from '../types'
import config from '../../utils/config'

export const getWeatherForecast = (coords) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const apiResponse = await executeGetRequest(`/onecall?lat=${coords.lat}&lon=${coords.lng}&exclude=hourly,minutely&units=metric&appid=${config.constants.APIKey}`);
            dispatch(setLoading(false));
            if (apiResponse.status != 200) {
                throw apiResponse.originalError;
            }
            dispatch(setWeatherData(apiResponse?.data?.daily))
        } catch (err) {
            dispatch(setLoading(false));
            return { error: err };
        }
    };
};

const setWeatherData = (list) => {
    return {
        type: SET_WEATHER_DATA,
        payload: list
    };
}

const setLoading = (loading) => {
    return {
        type: LOADING_STATUS,
        payload: loading
    };
}
