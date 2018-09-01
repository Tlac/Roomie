import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm/LoginForm';
import HomePage from './components/HomePage/HomePage';
import UserSurvey from './components/UserSurvey/UserSurvey';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth" hideNavBar>
					<Scene key="login" component={LoginForm} title="Please Login" initial />
				</Scene>
				<Scene key="main">
					<Scene key="home" component={HomePage} title="Home"/>
				</Scene>
				<Scene key="userSurvey">
					<Scene key="userSurveyHome" component={UserSurvey} title="UserSurvey"/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
