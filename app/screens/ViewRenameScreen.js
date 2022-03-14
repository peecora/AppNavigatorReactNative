import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";

function ViewRenameScreen(props) {
	const goBack = () => props.navigation.navigate("Home");
	return (
		<View style={styles.viewDiv}>
			<View style={styles.deleteBox}>
				<Button title="Go Back" onPress={goBack}></Button>
			</View>
			<View style={styles.addBox}></View>
			<Image
				source={require("../assets/chair.jpg")}
				style={styles.sellImg}
				resizeMode="contain"
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	deleteBox: {
		width: 100,
		height: 100,
		backgroundColor: "#fc5c65",
		//position: "absolute",
		top: 40,
		right: 50,
	},
	addBox: {
		width: 50,
		height: 50,
		backgroundColor: "#4ecdc4",
		position: "absolute",
		top: 80,
		left: 50,
	},
	viewDiv: {
		flex: 1,
		//alignContent:"center",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000",
	},
	sellImg: {
		width: "200%",
		height: "100%",
		//zIndex: -1,
	},
});
export default ViewRenameScreen;
