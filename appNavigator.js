import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewRenameScreen from "./app/screens/ViewRenameScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={WelcomeScreen}
					options={{ title: "Welcome" }}
				/>
				<Stack.Screen name="ViewScreen" component={ViewRenameScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
