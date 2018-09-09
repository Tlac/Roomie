import {
	FIRST_NAME_CHANGED,
	LAST_NAME_CHANGED,
	ACTIVITY_INFO_CHANGED,
	ROOMMATE_FIND_CHANGED,
	GUEST_FREQUENCY_CHANGED,
	PET_FRIENDLY_CHANGED,
	REQUIRE_PARKING_CHANGED,
	SMOKE_REGULARLY_CHANGED,
	DIET_INFO_CHANGED,
	COOK_FREQUENCY_CHANGED,
	SLEEP_TYPE_CHANGED,
	CLEANING_FREQUENCY_CHANGED,
	SUBMIT_SURVEY,
	 } from "./types";
import firebase from "firebase";

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

export const activityInfoChanged = (text) => {
	return {
		type: ACTIVITY_INFO_CHANGED,
		payload: text
	}
}

export const roommmateFindChange = (decision) => {
	return {
		type: ROOMMATE_FIND_CHANGED,
		payload: decision
	}
}

export const guestFrequencyChange = (decision) => {
	return {
		type: GUEST_FREQUENCY_CHANGED,
		payload: decision
	}
}
export const petFriendlyChange = (decision) => {
	return {
		type: PET_FRIENDLY_CHANGED,
		payload: decision
	}
}

export const requireParkingChange = (decision) => {
	return {
		type: REQUIRE_PARKING_CHANGED,
		payload: decision
	}
}

export const smokeRegularlyChange = (decision) => {
	return {
		type: SMOKE_REGULARLY_CHANGED,
		payload: decision
	}
}

export const dietInfoChange = (decision) => {
	return {
		type: DIET_INFO_CHANGED,
		payload: decision
	}
}

export const cookFrequencyChange = (decision) => {
	return {
		type: COOK_FREQUENCY_CHANGED,
		payload: decision
	}
}

export const sleepTypeChange = (decision) => {
	return {
		type: SLEEP_TYPE_CHANGED,
		payload: decision
	}
}

export const cleaningFrequencyChange = (decision) => {
	return {
		type: CLEANING_FREQUENCY_CHANGED,
		payload: decision
	}
}

export const submitSurvey = ({
	firstName,
	lastName,
	activityInfo,
	needRoommate,
	guestFrequency,
	petFriendly,
	requireParking,
	smokeRegularly,
	dietInfo,
 	cookFrequency,
	sleepType,
	cleaningFrequency}) => {
	return (dispatch) => {
		const { currentUser } = firebase.auth();
		let userRef = firebase.database().ref(`/users/${currentUser.uid}`)
		userRef.update({
			surveyInfo: {
				firstName,
				lastName,
				activityInfo,
				needRoommate,
				guestFrequency,
				petFriendly,
				requireParking,
				smokeRegularly,
				dietInfo,
				cookFrequency,
				sleepType,
				cleaningFrequency,
			},
			surveyTaken: true
		});
		dispatch({type: SUBMIT_SURVEY});
	}
}
