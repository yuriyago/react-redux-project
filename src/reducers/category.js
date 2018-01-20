import { SHOW_CATEGORY }  from '../actions'

const initialState = {
	list: []
}

export function showCategory(state = initialState, action) {

	switch(action.type) {
		case SHOW_CATEGORY:
			return Object.assign({}, state, {list: action.payload})
		default:
			return state
	}

}