import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import LoadingReducer from './reducers/LoadingReducer';
import WeatherReducer from './reducers/WeatherReducer';

const rootReducer = combineReducers({
  loadingReducer: LoadingReducer,
  WeatherReducer: WeatherReducer,

});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store