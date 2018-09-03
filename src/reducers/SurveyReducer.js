import { FIRST_NAME_CHANGED, LAST_NAME_CHANGED, SUBMIT_SURVEY, ROOMMATE_FIND_CHANGED } from '../actions/types';

const INITIAL_STATE = { firstName: '', lastName: '', needRoommate: true};

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case FIRST_NAME_CHANGED:
			return { ...state, firstName: action.payload }
		case LAST_NAME_CHANGED:
			return { ...state, lastName: action.payload }
		case ROOMMATE_FIND_CHANGED:
			console.log(action.payload);
			return { ...state, needRoommate: action.payload }
		case SUBMIT_SURVEY:
			return state;

		default:
			return state;
	}
}
