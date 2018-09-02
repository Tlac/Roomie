import { USER_DATA_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {loading: true, user: {email: null, surveyTaken: null}};

export default (state= INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_DATA_FETCH_SUCCESS:
			return {...state, loading: false, user: action.payload};
		default:
			return state;
	}
}
