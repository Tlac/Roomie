import firebase from 'firebase';
import { USER_DATA_FETCH_SUCCESS } from './types';

export const userDataFetch = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}`)
			.on('value', snapshot => {
				dispatch({
					type: USER_DATA_FETCH_SUCCESS,
					payload: snapshot.val()
				});
			});
	}
}
