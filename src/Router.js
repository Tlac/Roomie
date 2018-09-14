import React from "react";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/LoginForm/LoginForm";
import CreateUserForm from "./components/CreateUserForm/CreateUserForm";
import HomePage from "./components/HomePage/HomePage";
import UserSurvey from "./components/UserSurvey/UserSurvey";
import UserGroups from "./components/UserGroups/UserGroups";
import UserProfile from "./components/UserProfile/UserProfile";
import { Text } from 'react-native';
import { Icon } from 'react-native-elements'

const HomeIcon = ({ focused, title }) => {
  return focused ? <Icon name='home' color='#00aced'/> : <Icon name='home' />;
}

const GroupIcon = ({ focused, title }) => {
  return focused ? <Icon name='group' color='#00aced'/> : <Icon name='group' />;
}

const ProfileIcon = ({ focused, title }) => {
  return focused ? <Icon name='account-circle' color='#00aced'/> : <Icon name='account-circle' />;
}

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth" hideNavBar>
					<Scene key="login" component={LoginForm} title="Please Login" initial />
          <Scene key="createUser" component={CreateUserForm} title="Create User" />
				</Scene>
				<Scene key="main" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
					<Scene key="home" component={HomePage} icon={HomeIcon} title="Home"/>
					<Scene key="userGroups" component={UserGroups} icon={GroupIcon} title="Groups" />
					<Scene key="userProfile" component={UserProfile} icon={ProfileIcon} title="Profile" />
				</Scene>
				<Scene key="survey">
					<Scene key="userSurvey" component={UserSurvey} title="User Survey" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
