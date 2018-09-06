import {
	FIRST_NAME_CHANGED,
	LAST_NAME_CHANGED,
	ROOMMATE_FIND_CHANGED,
	PET_FRIENDLY_CHANGE,
	REQUIRE_PARKING_CHANGE,
	SUBMIT_SURVEY,
} from '../actions/types';

const INITIAL_STATE = {
	firstName: '',
	lastName: '',
	needRoommate: true,
	petFriendly: true,
	requireParking: true,
};

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case FIRST_NAME_CHANGED:
			return { ...state, firstName: action.payload }
		case LAST_NAME_CHANGED:
			return { ...state, lastName: action.payload }
		case ROOMMATE_FIND_CHANGED:
			console.log(action.payload);
			return { ...state, needRoommate: action.payload }
		case PET_FRIENDLY_CHANGE:
			console.log(action.payload);
			return { ...state, petFriendly: action.payload }
		case REQUIRE_PARKING_CHANGE:
			console.log(action.payload);
			return { ...state, requireParking: action.payload }
		case SUBMIT_SURVEY:
			return state;
		default:
			return state;
	}
}
