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
} from "../actions/types";

const INITIAL_STATE = {
	firstName: "",
	lastName: "",
	activityInfo: "",
	needRoommate: true,
	guestFrequency: true,
	petFriendly: true,
	requireParking: true,
	smokeRegularly: true,
	dietInfo: "everything",
	cookFrequency: "everyday",
	sleeperType: "light_sleeper",
	cleaningFrequency: "everyday",
};

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case FIRST_NAME_CHANGED:
			return { ...state, firstName: action.payload }
		case LAST_NAME_CHANGED:
			return { ...state, lastName: action.payload }
		case ACTIVITY_INFO_CHANGED:
			return { ...state, activityInfo: action.payload }
		case ROOMMATE_FIND_CHANGED:
			return { ...state, needRoommate: action.payload }
		case GUEST_FREQUENCY_CHANGED:
			return { ...state, guestFrequency: action.payload }
		case PET_FRIENDLY_CHANGED:
			return { ...state, petFriendly: action.payload }
		case REQUIRE_PARKING_CHANGED:
			return { ...state, requireParking: action.payload }
		case SMOKE_REGULARLY_CHANGED:
			return { ...state, smokeRegularly: action.payload }
		case DIET_INFO_CHANGED:
			return { ...state, dietInfo: action.payload }
		case COOK_FREQUENCY_CHANGED:
			return { ...state, cookFrequency: action.payload }
		case SLEEP_TYPE_CHANGED:
			return { ...state, sleepType: action.payload }
		case CLEANING_FREQUENCY_CHANGED:
			return { ...state, cleaningFrequency: action.payload }
		case SUBMIT_SURVEY:
			return state;
		default:
			return state;
	}
}
