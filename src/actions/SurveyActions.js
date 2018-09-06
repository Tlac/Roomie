import {
	FIRST_NAME_CHANGED,
	LAST_NAME_CHANGED,
	ROOMMATE_FIND_CHANGED,
	PET_FRIENDLY_CHANGE,
	REQUIRE_PARKING_CHANGE,
	SUBMIT_SURVEY,
	 } from './types';
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

export const petFriendlyChange = (decision) => {
	return {
		type: PET_FRIENDLY_CHANGE,
		payload: decision
	}
}

export const requireParkingchange = (decision) => {
	return {
		type: REQUIRE_PARKING_CHANGE,
		payload: decision
	}
}
export const submitSurvey = ({ firstName, lastName, needRoommate, petFriendly, requireParking }) => {
	return (dispatch) => {
		const { currentUser } = firebase.auth();
		let userRef = firebase.database().ref(`/users/${currentUser.uid}`)
		userRef.update({
			surveyInfo: { firstName, lastName, needRoommate, petFriendly, requireParking },
			surveyTaken: true
		});
		dispatch({type: SUBMIT_SURVEY});
	}
}
