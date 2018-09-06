import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './UserSurvey-style';
import {
	firstNameChanged,
	lastNameChanged,
	roommmateFindChange,
	petFriendlyChange,
	requireParkingchange,
	submitSurvey
} from '../../actions';
import RadioGroup from 'react-native-radio-buttons-group';

class UserSurvey extends Component {
	onFirstNameChange(text) {
		this.props.firstNameChanged(text);
	}
	onLastNameChange(text) {
		this.props.lastNameChanged(text);
	}
	onRoommateFindChange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		const decision = data.value === "yes" ? true : false;
		console.log(decision);
		console.log(this.props)
		this.props.roommmateFindChange(decision);
	}
	onPetFriendlyChange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		const decision = data.value === "yes" ? true : false;
		console.log(decision);
		console.log(this.props)
		this.props.petFriendlyChange(decision);
	}

	onRequireParkingchange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		const decision = data.value === "yes" ? true : false;
		console.log(decision);
		console.log(this.props)
		this.props.requireParkingchange(decision);
	}

	onButtonPress() {
		const { firstName, lastName, needRoommate, petFriendly, requireParking } = this.props;
		this.props.submitSurvey({ firstName, lastName, needRoommate, petFriendly, requireParking });
	}

	render() {
		console.log(this.state);
		return (
			<View>
				<Text>First Name</Text>
				<TextInput
					autoCorrect={false}
					label="First Name"
					placeholder="John"
					onChangeText={this.onFirstNameChange.bind(this)}
				/>
				<Text>Last Name</Text>
				<TextInput
					autoCorrect={false}
					label="Last Name"
					placeholder="Doe"
					onChangeText={this.onLastNameChange.bind(this)}
				/>

				<Text>Are you looking for a roommate?</Text>
				<RadioGroup onPress={this.onRoommateFindChange.bind(this)} radioButtons={[{
	        label: 'Yes',
	        value: "yes",
	      }, {
					label: 'No',
					value: "no",
				}]}/>

				<Text>Are you pet friendly?</Text>
				<RadioGroup onPress={this.onPetFriendlyChange.bind(this)} radioButtons={[{
					label: 'Yes',
					value: "yes",
				}, {
					label: 'No',
					value: "no",
				}]}/>

				<Text>Do you require parking</Text>
				<RadioGroup onPress={this.onRequireParkingchange.bind(this)} radioButtons={[{
					label: 'Yes',
					value: "yes",
				}, {
					label: 'No',
					value: "no",
				}]}/>

				<TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress.bind(this)}>
					<Text style={styles.buttonText}>
						Submit
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
};

const mapStateToProps = state => {
	const { firstName, lastName, needRoommate, petFriendly, requireParking } = state.surveyInfo;
	return { firstName, lastName, needRoommate, petFriendly, requireParking };
}

export default connect(mapStateToProps, {
	firstNameChanged,
	lastNameChanged,
	roommmateFindChange,
	petFriendlyChange,
	requireParkingchange,
	submitSurvey })(UserSurvey);
