import { FIRST_NAME_CHANGED, LAST_NAME_CHANGED, SUBMIT_SURVEY, ROOMMATE_FIND_CHANGED } from './types';
import firebase from 'firebase';

export const firstNameChanged = (text) => {
	return {
		type: FIRST_NAME_CHANGED,
		payload: text
	}
}

export const lastNameChanged = (text) => {
	return {
		type: LAST_NAME_CHANGED,
		payload: text
	}
}

export const roommmateFindChange = (decision) => {
	return {
		type: ROOMMATE_FIND_CHANGED,
		payload: decision
	}
}
export const submitSurvey = ({ firstName, lastName, needRoommate }) => {
	return (dispatch) => {
		const { currentUser } = firebase.auth();
		let userRef = firebase.database().ref(`/users/${currentUser.uid}`)
		userRef.update({
			surveyInfo: { firstName, lastName, needRoommate },
			surveyTaken: true
		});
		dispatch({type: SUBMIT_SURVEY});
	}
}
