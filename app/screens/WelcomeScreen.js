import React from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
	Image,
	Text,
	Button,
} from "react-native";
import ViewRenameScreen from "./ViewRenameScreen";

function WelcomeScreen(props) {
	console.log(props);

	const login = () => props.navigation.navigate("ViewScreen");
	return (
		<ImageBackground
			source={require("../assets/background.jpg")}
			//resizeMode="cover"
			style={styles.image}
			/*width="500"
			height="500"*/
		>
			<View style={styles.logoContainer}>
				<Image
					//source={require("../assets/logo-red.png")}
					source={require("../assets/logo-red.png")}
					//resizeMode="cover"
					style={styles.logoImg}
				/>
				<Text style={styles.textStl}>Sell What you don't need</Text>
			</View>
			<View style={{ width: "100%", height: 70 }}>
				<Button onPress={login} color="#fc5c65" title="Login" />
			</View>
			<View style={styles.registerBtn} />
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	loginBtn: {
		flex: 0.1,
		backgroundColor: "#fc5c65",
		width: "100%",
		//height: 70,
	},
	registerBtn: {
		flex: 0.1,
		backgroundColor: "#4ecdc4",
		width: "100%",
		//height: 70,
	},
	logoImg: {
		top: "10%",
		width: 100,
		height: 100,
		zIndex: 2,
	},
	logoContainer: {
		flex: 1,
		alignItems: "center",
		position: "absolute",
		top: "10%",
		zIndex: 2,
	},
	textStl: {
		fontSize: 18,
		zIndex: 2,
		marginTop: 20,
		fontWeight: "bold",
		fontFamily: "Courier",
	},
});

export default WelcomeScreen;
