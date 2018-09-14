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
	DISPLAY_PASSWORD_ERROR,
} from "./types";
import firebase from "firebase"
import { Actions } from "react-native-router-flux";

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const passwordConfirmChanged = (text) => {
	return {
		type: PASSWORD_CONFIRM_CHANGED,
		payload: text
	};
};

export const createUser = ({email, password, confirmPassword}) => {
	return (dispatch) => {
		dispatch({type: CREATE_USER});
		firebase.auth().createUserWithEmailAndPassword(email,password)
			.then(user => {
				const { currentUser } = firebase.auth();
				let userRef = firebase.database().ref(`/users/${currentUser.uid}`);
				userRef.set({
					email: email,
					surveyTaken: false
				});
				firebaseLogin(dispatch, email, password);
			})
			.catch(error => {
				createUserFail(dispatch);
			});

	}
}

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({type: LOGIN_USER});
		firebaseLogin(dispatch, email, password);
	};
};

export const resetState = (dispatch) => {
	return (dispatch) => {
		dispatch({
			type: RESET_STATE
		});
	};
}

export const displayPasswordError = (dispatch) => {
	return (dispatch) => {
		dispatch({
			type: DISPLAY_PASSWORD_ERROR
		});
	}
}
const firebaseLogin = (dispatch, email, password) =>  {
	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => {
			const { currentUser } = firebase.auth();
			firebase.database().ref(`/users/${currentUser.uid}`)
				.on("value", snapshot => {
					if (snapshot.val().surveyTaken) {
						loginUserSuccess(dispatch, user);
					} else {
						loginUserSuccessWithSurvey(dispatch, user);
					}
				})
		})
		.catch(user=> {
			loginUserFail(dispatch);
		});
}

const createUserFail = (dispatch) => {
	dispatch({
		type: CREATE_USER_FAIL
	})
}
const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL
	});
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.main();
}

const loginUserSuccessWithSurvey = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.survey();
}
