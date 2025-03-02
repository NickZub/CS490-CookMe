import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import CookBookScreen from "./CookBookScreen";
import CategoriesScreen from "./CategoriesScreen"
import { RecipesProvider } from "./components/RecipesContext"; // Import your RecipesProvider
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo vector icons package
import { ArrayProvider } from "./components/GenerateRecipes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <RecipesProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'CookBook') {
                iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === 'Cuisines') {
                iconName = focused ? 'globe' : 'globe-outline';
              }

              // You can return any component here, such as icons from a library
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              display: 'flex',
            },
          })}
        >
          <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          <Tab.Screen name="CookBook" component={CookBookScreen} />
          <Tab.Screen name="Cuisines" component={CategoriesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </RecipesProvider>
  );
}

export default App;
