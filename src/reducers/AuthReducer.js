import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	PASSWORD_CONFIRM_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	CREATE_USER,
	CREATE_USER_FAIL,
	RESET_STATE,
	DISPLAY_PASSWORD_ERROR
} from "../actions/types";

const INITIAL_STATE = {
	email: "",
	password: "",
	confirmPassword: "",
	user: null,
	error: "",
	loading: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case PASSWORD_CONFIRM_CHANGED:
			return { ...state, confirmPassword: action.payload };
		case CREATE_USER:
			return { ...state, loading: true, error: "" };
		case CREATE_USER_FAIL:
			return { ...state, ...INITIAL_STATE, error: "Email already in use" };
		case LOGIN_USER:
			return { ...state, loading: true, error: ""};
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload};
		case LOGIN_USER_FAIL:
			return { ...state, loading: false, error: "Authentication Failed." };
		case RESET_STATE:
			return { ...state, ...INITIAL_STATE};
		case DISPLAY_PASSWORD_ERROR:
			return { ...state, error: "Passwords do not match" };
		default:
			return state;
	}
};
