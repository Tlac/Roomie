import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from '.././common';
import { emailChanged, passwordChanged, loginUser } from '../../actions';

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

	renderError() {
		if (this.props.error) {
			return (
				<View style={{backgroundColor: 'white'}}>
					<Text style={styles.errorTextStyles}>
						{this.props.error}
					</Text>
				</View>
			)
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		)
	}
	render() {
		return (
			<View style={{backgroundColor: '#247BA0', flex: 1}}>
				<View style={styles.loginContainer}>
					<Image resizeMode="contain" style={styles.logo} source={require('../images/logo.png')} />

		 		</View>

				<CardSection>
					<Input
						placeholder="email@example.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				{this.renderError()}

				<CardSection>
					{this.renderButton()}
				</CardSection>
		</View>
		);
	}
}

const styles = {
	errorTextStyles: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
	},
	loginContainer:{
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
			position: 'absolute',
			width: 300,
			height: 100
	}
}

const mapStateToProps = ({auth}) => {
	const { email, password, error, loading } = auth;
	return { email, password, error, loading};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
