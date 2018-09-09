import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";
import SurveyReducer from "./SurveyReducer";
export default combineReducers({
	auth: AuthReducer,
	userInfo: UserReducer,
	surveyInfo: SurveyReducer
});
