// client/src/reducers/index.js
import { combineReducers } from 'redux';
import imageReducer from './imageReducer';

const rootReducer = combineReducers({
  image: imageReducer,
  // Add other reducers if needed
});

export default rootReducer;
