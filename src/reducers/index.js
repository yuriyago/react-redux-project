import { combineReducers } from 'redux';
import { showCategory } from './category'

const rootReducer = combineReducers({
	category: showCategory
});

export default rootReducer;
