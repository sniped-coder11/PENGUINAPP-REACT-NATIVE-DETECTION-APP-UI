import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { MaterialCommunityIcons } (optional) from '@expo/vector-icons'; // For icons

import HomeScreen from '../screens/HomeScreen'; // Replace with your HomeScreen path

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home_Screen"
        component={HomeScreen}
        options={{
          headerTitle: 'Home', // Optional: Set header title
          //tabBarIcon: ({ color }) => ( // Optional: Icon for future tab bar usage
            //<MaterialCommunityIcons name="home" color={color} size={26} />
          //),
        }}
      />
      {/* Add more screens here if needed */}
    </Stack.Navigator>
  );
};

export default Routes;