import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	containerStyle: {
		backgroundColor: '#1A1E1F',
		flex: 1,
	},
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputContainer: {
		paddingLeft:40,
		paddingRight:40,
		paddingBottom: 200,
	},
	inputStyle: {
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		fontSize: 18,
		color: '#FFFAD5',
	},
	buttonContainer: {
		backgroundColor: '#45BF55',
    paddingVertical: 15,
		borderRadius:5,
		marginTop: 2,
	},
	errorContainer: {
		backgroundColor: '#1A1E1F'
	},
	buttonText: {
		color: '#FFFAD5',
    textAlign: 'center',
    fontWeight: '700',
	},
	errorTextStyles: {
		fontSize: 20,
		alignSelf: 'center',
		color: '#F25F5C',
	},
	logoContainer:{
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
			position: 'absolute',
			width: 300,
			height: 120,
	}
});
