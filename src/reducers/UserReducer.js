import { USER_DATA_FETCH_SUCCESS, FETCH_ALL_USERS } from "../actions/types";

const INITIAL_STATE = {
	loading: true,
	user: {
		email: null,
		surveyTaken: null
	},
	allUsers: null,
};

export default (state= INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_DATA_FETCH_SUCCESS:
			return { ...state, loading: false, user: action.payload };
		case FETCH_ALL_USERS:
			return { ...state, allUsers: action.payload}
		default:
			return state;
	}
}
