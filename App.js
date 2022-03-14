import { View, Platform, StatusBar, StyleSheet } from "react-native";
//There are multiple kinds of touchable components, such as:
//TouchableWithoutFeedback → Does nothing
//TouchableOpacity → lowers the opacity of the touched item
//TouchableHighlight → darkens the background of the touched item
//===============================================================
//You can use the libary Hooks, to detect the device's orientation and act accordingly
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewRenameScreen from "./app/screens/ViewRenameScreen";
import AppNavigator from "./appNavigator";

export default function App() {
	/*const handlePressed = () => console.log("Pressed");
	console.log(Dimensions.get("screen"));
	console.log(useDeviceOrientation());
	//To use the device Orientation in any given circumstance, we can use object destructuring
	const { landscape } = useDeviceOrientation();*/
	return (
		<AppNavigator />
		/*<View
			style={{
				backgroundColor: "#fff",
				flex: 1,
				flexDirection: "row",
				alignContent: "center", //Takes care about the wrapping
				alignItems: "center",
				justifyContent: "center",
			}}>
			<View
				style={{
					backgroundColor: "dodgerblue", // width: 100,
					height: 100,
					width: 100,
				}}
			/>
			<View
				style={{
					backgroundColor: "gold",
					width: 100,
					height: 100,
					top: 20,
					left: 20,
					position: "absolute",
				}}
			/>
			<View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
		</View>
		//If a really long text is presented, the line automatically breaks, however
		// you can force the line to be truncated by doing <Text numberOfLines={x}/>
		// The text also can have handlers to functions, by doing
		// <Text onPress={function or arrow fnc}/>
		/*
			<Text numberOfLines={1} onPress={handlePressed}>
				Hihihi
			</Text>
			*/

		//The alert import, can modify the alert box in each plataform, to your desired
		//liking
		/*<SafeAreaView style={styles.container}>
			<View
				style={{
					backgroundColor: "dodgerblue",
					//To make sure the component takes exactly half of the screen, you can use percentages
					//width: 150,
					width: "100%",
					height: landscape ? "100%" : 30,
				}}></View>
		</SafeAreaView>*/
	);
}
/**
 * <TouchableHighlight onPress={() => console.log("Image Tap")}>
				<Button title="Hehe" onPress={() => console.log("BTN Tap")} />
				<Image
					//blurRadius={10}
					//To add an image from the internet, you must
					//provide React Native with the width and height
					source={{
						width: 200,
						height: 200,
						uri: "https://picsum.photos/200",
					}}
				/>
			</TouchableHighlight>
 */

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		//justifyContent: "center",
		//alignItems: "center",
		//Creating a safe area around the top of the Mobile phone
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
