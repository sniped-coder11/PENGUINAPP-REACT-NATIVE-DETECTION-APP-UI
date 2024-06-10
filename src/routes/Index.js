import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For icons

import HomeScreen from '../screens/HomeScreen';
import PartnerScreen from '../screens/PartnerScanScreen';
import CustomerScreen from '../screens/CustomerScanScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home_Screen" // Descriptive name for Home screen
          component={HomeScreen}
          options={{
            headerTitle: '', 
            tabBarIcon: ({ color }) => ( 
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        {/* Add more screens here if needed */}
        <Stack.Screen
          name="PartnerScan" // Clear name for PartnerScan functionality
          component={PartnerScreen}
          options={{
            headerTitle: '', // Optional: Set header title
          }}
        />
        <Stack.Screen
          name="CustomerScan" 
          component={CustomerScreen}
          options={{
            headerTitle: '', // Optional: Set header title
          }}
        />
      </Stack.Navigator>
    );
  };
  
  export default Routes;