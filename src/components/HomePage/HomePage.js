import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userDataFetch } from '../../actions';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import styles from './HomePage-style';

class HomePage extends Component {
	componentWillMount() {
			this.props.userDataFetch();
	}
	renderSurvey() {
		return (
			<View>
				<StatusBar
					barStyle="dark-content"
				/>
				<Text>Hi, You haven't taken the survey yet, let's do that!</Text>
			</View>
		)
	}

	renderHomePage() {
		return (
			<View>
				<StatusBar
					barStyle="dark-content"
				/>
				<Text>Hi, welcome to the home page. Thank you for taking the survey.</Text>
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
	return {
		userHasTakenSurvey: surveyTaken,
		userEmail: email,
		loading: state.userInfo.loading
	};
}

export default connect(mapStateToProps, {userDataFetch})(HomePage);
