import { combineReducers } from 'redux';

import Todo from '../src/components/redux/reducer';

const rootReducer = combineReducers({
  Todo,
});

export default rootReducer;