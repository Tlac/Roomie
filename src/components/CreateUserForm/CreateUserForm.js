import React, { Component } from 'react';
import { Text, View, Image, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import styles from './CreateUserForm-style';
import {
	emailChanged,
	passwordChanged,
	passwordConfirmChanged,
	createUser,
	resetState,
	displayPasswordError,
} from "../../actions";
import { Actions } from "react-native-router-flux";

class CreateUserForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onPasswordConfirmChange(text) {
		this.props.passwordConfirmChanged(text);
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={styles.errorContainer}>
					<Text style={styles.errorTextStyles}>
						{this.props.error}
					</Text>
				</View>
			)
		}
	}

	onButtonPress() {
		const { email, password, confirmPassword } = this.props;
		password === confirmPassword ? this.props.createUser({email, password}) : this.props.displayPasswordError()
	}

	renderButton() {
		if (this.props.loading) {
			return (
				<View style={styles.spinnerStyle}>
					<ActivityIndicator size={"large"} />
				</View>
			)
		}
		return (
			<View>
				<TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress.bind(this)}>
					<Text style={styles.buttonText}>
						Sign Up
					</Text>
				</TouchableOpacity>
				<Text onPress={this.goToLogInPage.bind(this)} style={styles.returnToLogInText}>Back to log in</Text>
			</View>
		)
	}

	goToLogInPage() {
		this.props.resetState();
		Actions.login();
	}

	render() {
		return(
			<View style={styles.containerStyle}>
				<View style={styles.logoContainer}>
					<Image resizeMode="contain" style={styles.logo} source={require("../images/logo/logo.png")} />
				</View>
				{this.renderError()}
				<TextInput
					placeholder={"Email"}
					autoCorrect={false}
					autoCapitalize={"none"}
					style={styles.inputStyle}
					value={this.props.email}
					placeholderTextColor="#595959"
					onChangeText={this.onEmailChange.bind(this)}
				/>
				<TextInput
					secureTextEntry
					placeholder={"Password"}
					autoCorrect={false}
					autoCapitalize={"none"}
					style={styles.inputStyle}
					value={this.props.password}
					placeholderTextColor="#595959"
					onChangeText={this.onPasswordChange.bind(this)}
				/>
				<TextInput
					secureTextEntry
					placeholder={"Confirm Password"}
					autoCorrect={false}
					autoCapitalize={"none"}
					style={styles.inputStyle}
					value={this.props.confirmPassword}
					placeholderTextColor="#595959"
					onChangeText={this.onPasswordConfirmChange.bind(this)}
				/>
				{this.renderButton()}
			</View>
		);
	}
}

const mapStateToProps = ({auth}) => {
	const { email, password, confirmPassword, error, loading } = auth;
	return { email, password, confirmPassword, error, loading };
};

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	passwordConfirmChanged,
	createUser,
	resetState,
	displayPasswordError
})(CreateUserForm);
