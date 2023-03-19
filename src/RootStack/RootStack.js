import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { TabOption } from "./components/TabOption";
import HomeScreen from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { GenerationsScreen } from "../screens/GenerationsScreen";
import { PokemonListScreen } from "../screens/PokemonListScreen";

const styles = StyleSheet.create({
  shadow: {
    position: "absolute",
    bottom: 25,
    left: 90,
    right: 90,
    backgroundColor: "#171710",
    borderRadius: 200,
    height: 50,
    shadowOffset: { width: -5, height: 5 },
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 0.4,
    opacity: 0.9,
    elevation: 5,
  },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="GenerationsScreen" component={GenerationsScreen} />
        <Stack.Screen name="PokemonListScreen" component={PokemonListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.shadow,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabOption focused={focused} icon="home" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <TabOption icon="search" isSearch />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <TabOption focused={focused} icon="gear" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
