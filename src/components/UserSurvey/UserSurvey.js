/*
	Will refactor this in the future -Tlac
*/

import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import { connect } from "react-redux";
import styles from "./UserSurvey-style";
import {
	firstNameChanged,
	lastNameChanged,
	activityInfoChanged,
	roommmateFindChange,
	guestFrequencyChange,
	petFriendlyChange,
	requireParkingChange,
	smokeRegularlyChange,
	dietInfoChange,
	cookFrequencyChange,
	sleepTypeChange,
	cleaningFrequencyChange,
	submitSurvey,
} from "../../actions";
import RadioGroup from "react-native-radio-buttons-group";

class UserSurvey extends Component {
	onFirstNameChange(text) {
		this.props.firstNameChanged(text);
	}
	onLastNameChange(text) {
		this.props.lastNameChanged(text);
	}
	onActivityInfoChanged(text) {
		this.props.activityInfoChanged(text);
	}
	onRoommateFindChange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		const decision = data.value === "yes" ? true : false;
		this.props.roommmateFindChange(decision);
	}

	onGuestFrequencyChange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		const decision = data.value === "yes" ? true : false;
		this.props.guestFrequencyChange(decision);
	}

	onPetFriendlyChange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		const decision = data.value === "yes" ? true : false;
		this.props.petFriendlyChange(decision);
	}

	onRequireParkingChange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		const decision = data.value === "yes" ? true : false;
		this.props.requireParkingChange(decision);
	}

	onSmokeRegularlyChange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		const decision = data.value === "yes" ? true : false;
		this.props.smokeRegularlyChange(decision);
	}

	onDietInfoChange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		this.props.dietInfoChange(data.value);
	}

	onCookFrequencyChange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		this.props.cookFrequencyChange(data.value);
	}

	onSleepTypeChange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		this.props.sleepTypeChange(data.value);
	}

	onCleaningFrequencyChange(data) {
		data = data.filter((button) => {
			return button.selected;
		})[0]
		this.props.cleaningFrequencyChange(data.value);
	}

	onButtonPress() {
		const {
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
			cleaningFrequency
		} = this.props;
		this.props.submitSurvey({
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
			cleaningFrequency
		});
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<StatusBar barStyle="dark-content" />
				<Text style={{paddingBottom: 15}}>
					Thank you for signing up, please a few minutes to answer the questions in this survey and we’ll match you with potential roommates.
				</Text>
				<View style={styles.surveyTextItem}>
					<Text style={styles.questionText}>First Name</Text>
					<TextInput
						autoCorrect={false}
						label="First Name"
						placeholder="John"
						style={styles.textInput}
						onChangeText={this.onFirstNameChange.bind(this)}
					/>
				</View>

				<View style={styles.surveyTextItem}>
					<Text style={styles.questionText}>Last Name</Text>
					<TextInput
						autoCorrect={false}
						label="Last Name"
						placeholder="Doe"
						style={styles.textInput}
						onChangeText={this.onLastNameChange.bind(this)}
					/>
				</View>

				<View style={styles.surveyTextItem}>
					<Text style={styles.questionText}>What do you like to do for fun?</Text>
					<TextInput
						autoCorrect={true}
						label="Activities"
						placeholder="Cool Stuff"
						style={styles.textInput}
						onChangeText={this.onActivityInfoChanged.bind(this)}
					/>
				</View>

				<View style={styles.surveyRadioButtonItem}>
					<Text style={styles.questionText}>Are you currently looking for a roommate?</Text>
					<RadioGroup flexDirection="row" onPress={this.onRoommateFindChange.bind(this)} radioButtons={[{
						label: "Yes",
						value: "yes",
					}, {
						label: "No",
						value: "no",
					}]}/>
				</View>

				<View style={styles.surveyRadioButtonItem}>
					<Text style={styles.questionText}>Do you often have guest over?</Text>
					<RadioGroup flexDirection="row" onPress={this.onGuestFrequencyChange.bind(this)} radioButtons={[{
						label: "Yes",
						value: "yes",
					}, {
						label: "No",
						value: "no",
					}]}/>
				</View>

				<View style={styles.surveyRadioButtonItem}>
					<Text style={styles.questionText}>Are you pet friendly?</Text>
					<RadioGroup flexDirection="row" onPress={this.onPetFriendlyChange.bind(this)} radioButtons={[{
						label: "Yes",
						value: "yes",
					}, {
						label: "No",
						value: "no",
					}]}/>
				</View>

				<View style={styles.surveyRadioButtonItem}>
					<Text style={styles.questionText}>Do you require parking?</Text>
					<RadioGroup flexDirection="row" onPress={this.onRequireParkingChange.bind(this)} radioButtons={[{
						label: "Yes",
						value: "yes",
					}, {
						label: "No",
						value: "no",
					}]}/>
				</View>

				<View style={styles.surveyRadioButtonItem}>
					<Text style={styles.questionText}>Do you smoke regularly?</Text>
					<RadioGroup flexDirection="row" onPress={this.onSmokeRegularlyChange.bind(this)} radioButtons={[{
						label: "Yes",
						value: "yes",
					}, {
						label: "No",
						value: "no",
					}]}/>
				</View>

				<View style={styles.surveyRadioButtonItem}>
					<Text style={styles.questionText}>Are you vegetarian or vegan?</Text>
					<RadioGroup onPress={this.onDietInfoChange.bind(this)} radioButtons={[{
						label: "No, I eat everything",
						value: "everything",
					}, {
						label: "Vegetarian",
						value: "vegetarian",
					}, {
						label: "Vegan",
						value: "vegan",
					}]}/>
				</View>

				<View style={styles.surveyRadioButtonItem}>
					<Text style={styles.questionText}>How often do you cook?</Text>
					<RadioGroup onPress={this.onCookFrequencyChange.bind(this)} radioButtons={[{
						label: "Everyday",
						value: "everyday",
					}, {
						label: "A few times per week",
						value: "few times per week",
					}, {
						label: "Rarely",
						value: "rarely",
					}, {
						label: "Never",
						value: "never",
					}]}/>
				</View>

				<View style={styles.surveyRadioButtonItem}>
					<Text style={styles.questionText}>Select one that describes you the best?</Text>
					<RadioGroup onPress={this.onSleepTypeChange.bind(this)} radioButtons={[{
						label: "I am a light sleeper",
						value: "light_sleeper",
					}, {
						label: "I am a heavy sleeper",
						value: "heavy_sleeper",
					}]}/>
				</View>

				<View style={styles.surveyRadioButtonItem}>
					<Text style={styles.questionText}>How often do you clean?</Text>
					<RadioGroup onPress={this.onCleaningFrequencyChange.bind(this)} radioButtons={[{
						label: "Everyday",
						value: "everyday",
					}, {
						label: "Once a week",
						value: "weekly",
					}, {
						label: "A few times per month",
						value: "few times per month",
					}, {
						label: "Once a month",
						value: "monthly",
					}, {
						label: "Less than once per month",
						value: "rarely",
					}]}/>
				</View>
				<TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress.bind(this)}>
					<Text style={styles.buttonText}>
						Submit
					</Text>
				</TouchableOpacity>
			</ScrollView>

		);
	}
};

const mapStateToProps = state => {
	const {
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
		cleaningFrequency
	} = state.surveyInfo;
	return {
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
		cleaningFrequency
	};
}

export default connect(mapStateToProps, {
	firstNameChanged,
	lastNameChanged,
	activityInfoChanged,
	roommmateFindChange,
	guestFrequencyChange,
	petFriendlyChange,
	requireParkingChange,
	smokeRegularlyChange,
	dietInfoChange,
	cookFrequencyChange,
	sleepTypeChange,
	cleaningFrequencyChange,
	submitSurvey,
 })(UserSurvey);
