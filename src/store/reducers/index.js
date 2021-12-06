import {combineReducers} from 'redux'

import counterReducer from './counter'
import searchReducer from './search'

const allReducers= combineReducers({
    counter: counterReducer,
    searchReducer
});

export default allReducers;