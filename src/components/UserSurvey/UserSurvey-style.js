import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		backgroundColor: "#DAEDE2",
		paddingLeft: 50,
		paddingRight: 50,
	},
	questionText: {
		color: "black",
		fontWeight: "bold",
	},
	surveyTextItem: {
		marginBottom:10,
		borderWidth: 1,
		borderTopColor: "#DAEDE2",
		borderLeftColor: "#DAEDE2",
		borderRightColor: "#DAEDE2",
		borderBottomColor: "black",
	},
	textInput: {
		height: 40,
		fontSize: 18,
	},
	surveyRadioButtonItem: {
		marginBottom: 10,
	},
	buttonContainer: {
		height: 50,
		backgroundColor: "#45BF55",
    paddingVertical: 15,
		borderRadius:5,
		marginBottom: 20,
	},
	buttonText: {
		color: "#FFFAD5",
		textAlign: "center",
		fontWeight: "700",
	},
});
