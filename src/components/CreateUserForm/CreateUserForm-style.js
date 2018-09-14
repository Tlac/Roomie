import { StyleSheet } from "react-native";

export default StyleSheet.create({
	containerStyle: {
		backgroundColor: "#1A1E1F",
		flex: 1,
    justifyContent: 'center',
		paddingLeft:40,
		paddingRight:40,
	},
	spinnerStyle: {
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		//position: "absolute",
		width: 300,
		height: 120,
		marginBottom: 50,
	},
	inputStyle: {
		height: 40,
		fontSize: 18,
		color: "#FFFAD5",
	},
	buttonContainer: {
		backgroundColor: "#45BF55",
    paddingVertical: 15,
		borderRadius:5,
		marginTop: 2,
	},
	buttonText: {
		color: "#FFFAD5",
		textAlign: "center",
		fontWeight: "700",
	},
	returnToLogInText: {
		color: "white",
		textAlign: "center",
		marginTop: 15
	},
	errorContainer: {
		backgroundColor: "#1A1E1F"
	},
	errorTextStyles: {
		fontSize: 20,
		alignSelf: "center",
		color: "#F25F5C",
	},
});
