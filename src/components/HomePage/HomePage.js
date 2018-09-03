import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { userDataFetch, fetchAllUsers } from '../../actions';
import { View, Text, ActivityIndicator, StatusBar, FlatList } from 'react-native';
import styles from './HomePage-style';
import UserSurvey from '../UserSurvey/UserSurvey';

class HomePage extends Component {
	componentWillMount() {
			this.props.userDataFetch();
			this.props.fetchAllUsers();
	}
	renderSurvey() {
		return (
			<View>
				<StatusBar
					barStyle="dark-content"
				/>
				<UserSurvey/>
			</View>
		)
	}
	renderItem(user) {
		const { firstName, lastName } = user.surveyInfo;
		return <Text>{`${user.surveyInfo.firstName} ${user.surveyInfo.lastName}`}</Text>
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
			</View>
		)
	}
	render() {
		if (this.props.loading) {
			return (
				<View style={styles.spinnerStyle}>
					<ActivityIndicator size={'large'} />
				</View>
			)
		} else {
			return (
				<View>
					{this.props.userHasTakenSurvey ? this.renderHomePage() : this.renderSurvey()}
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

export default connect(mapStateToProps, {userDataFetch, fetchAllUsers})(HomePage);
