import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchAllUsers } from "../../actions";
import { View, Text, ActivityIndicator, StatusBar, FlatList, TouchableOpacity } from "react-native";
import styles from "./HomePage-style";
import UserSurvey from "../UserSurvey/UserSurvey";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";

class HomePage extends Component {
	componentWillMount() {
			this.props.fetchAllUsers();
	}

	renderItem(user) {
		const { firstName, lastName } = user.surveyInfo;
		return <Text>{`${user.surveyInfo.firstName} ${user.surveyInfo.lastName}`}</Text>
	}
	onButtonPress() {
		firebase.auth().signOut().then(() => {
			Actions.login();
		});
	}
	renderHomePage() {
		return (
			<View>
				<StatusBar
					barStyle="dark-content"
				/>
				<Text>Hi, welcome to the home page. Thank you for taking the survey. Below are our users.</Text>
				<FlatList
					data={this.props.allUsers}
					renderItem={({item}) => this.renderItem(item)}
					keyExtractor={(user) => user.uid}
				/>
				<TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress.bind(this)}>
					<Text style={styles.buttonText}>
						Log off
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
	render() {
		if (this.props.loading) {
			return (
				<View style={styles.spinnerStyle}>
					<ActivityIndicator size={"large"} />
				</View>
			)
		} else {
			return (
				<View>
					{this.renderHomePage()}
				</View>
			);
		}
	}

};

const mapStateToProps = state => {
	const { email, surveyTaken } = state.userInfo.user;
	const allUsers = _.map(state.userInfo.allUsers, (val, uid) => {
		return {...val, uid};
	}).filter((user) => {
		return "surveyInfo" in user;
	});

	return {
		userHasTakenSurvey: surveyTaken,
		userEmail: email,
		loading: state.userInfo.loading,
		allUsers: allUsers
	};
}

export default connect(mapStateToProps, { fetchAllUsers })(HomePage);
