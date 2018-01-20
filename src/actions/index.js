import axios from 'axios'

export const SHOW_CATEGORY = 'SHOW_CATEGORY'

export function showCategory() {

	return (dispatch, getState) => {
		axios.get('https://api.chucknorris.io/jokes/categories')
			.then((response) => {
				dispatch( { type: SHOW_CATEGORY, payload: response.data } ) 
			})
		
	}
}

export const SHOW_CONTENT = 'SHOW_CONTENT'