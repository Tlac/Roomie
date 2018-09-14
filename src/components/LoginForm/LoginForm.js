import React, { Component } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, StatusBar } from "react-native";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser, resetState } from "../../actions";
import styles from "./LoginForm-style";
import { Actions } from "react-native-router-flux";
import firebase from "firebase";

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password});
	}
	goToSignUpPage() {
		this.props.resetState();
		Actions.createUser();
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
						Log In
					</Text>
				</TouchableOpacity>
				<Text onPress={this.goToSignUpPage.bind(this)} style={styles.signUpText}>Don't have an account yet? Sign up!</Text>
		</View>
		)
	}

	render() {
		return (
			<View style={styles.containerStyle}>
				<StatusBar
					barStyle="light-content"
				/>
				<View style={styles.logoContainer}>
					<Image resizeMode="contain" style={styles.logo} source={require("../images/logo/logo.png")} />
		 		</View>
				{this.renderError()}
				<View style={styles.inputContainer}>
					<View>
						<TextInput
							placeholder={"Email"}
							autoCorrect={false}
							autoCapitalize={"none"}
							style={styles.inputStyle}
							value={this.props.email}
							placeholderTextColor="#595959"
							onChangeText={this.onEmailChange.bind(this)}
						/>
					</View>
					<View>
						<TextInput
							secureTextEntry
							placeholder={"Password"}
							autoCorrect={false}
							style={styles.inputStyle}
							value={this.props.password}
							placeholderTextColor="#595959"
							onChangeText={this.onPasswordChange.bind(this)}
						/>
					</View>
					{this.renderButton()}
				</View>
		</View>
		);
	}
}

const mapStateToProps = ({auth}) => {
	const { email, password, error, loading } = auth;
	return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, resetState })(LoginForm);
