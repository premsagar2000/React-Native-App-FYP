import { combineReducers } from 'redux';
import userReducer from './SetReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
