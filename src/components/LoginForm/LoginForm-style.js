import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	containerStyle: {
		backgroundColor: '#105B63',
		flex: 1,
	},
	errorContainer: {
		backgroundColor: '#105B63'
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
		backgroundColor: '#FFD34E',
    paddingVertical: 15,
		borderRadius:5,
		borderWidth: 1,
    borderColor: '#BD4932'
	},
	buttonText: {
		color: '#BD4932',
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
			width: 360,
			height: 120,
	}
});
