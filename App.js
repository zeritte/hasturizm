/* eslint-disable quotes */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchScreen from "./src/screens/SearchScreen";
import PublishScreen from "./src/screens/PublishScreen";
import MyTripsScreen from "./src/screens/MyTripsScreen";
import InboxScreen from "./src/screens/InboxScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SelectLocationScreen from "./src/screens/SelectLocationScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

Ionicons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchInsideStack" component={SearchScreen} />
      <Stack.Screen name="SearchLocation" component={SelectLocationScreen} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // TODO: solve react native vector icons issue
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Search") {
              iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
            } else if (route.name === "Publish") {
              iconName = focused ? "ios-list-circle" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray"
        })}
      >
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Publish" component={PublishScreen} />
        <Tab.Screen name="My Trips" component={MyTripsScreen} />
        <Tab.Screen name="Inbox" component={InboxScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
