import { combineReducers } from "redux";
import basicReducer from './basicReducer';
import { routerReducer } from 'react-router-redux';
// export const reducers = combineReducers({
//   text: basicReducer,
//   routing: routerReducer
// });

export default {
  text: basicReducer
};