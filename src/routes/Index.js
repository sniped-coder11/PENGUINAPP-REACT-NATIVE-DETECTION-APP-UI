import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For icons

import HomeScreen from '../screens/HomeScreen';
import PartnerScreen from '../screens/PartnerScanScreen';
import CustomerScreen from '../screens/CustomerScanScreen';
import PartnerQRScanner from '../screens/PartnerScannerQR'; 
import GalleryPermissionScreen from '../screens/GalleryPermissionScreen';
import ScanTypeScreen from '../screens/ScanTypePartner';
import OpenCamera from '../screens/OpenCamera';
import VideoScreen from '../screens/VideoScreen';
//import SplashScreenComponent from '../components/SplashScreenComponent';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home" // Descriptive name for Home screen
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
          name="Partner" // Clear name for PartnerScan functionality
          component={PartnerScreen}
          options={{
            headerTitle: '', // Optional: Set header title
          }}
        />
        {/* Insert PartnerScannerQR screen here for proper navigation flow */}
      <Stack.Screen
        name="PartnerQR"
        component={PartnerQRScanner}
        options={{
          headerTitle: '', // Set clear header title for user context
        }}
      />
      <Stack.Screen
        name="ScanTypeScreen"
        component={ScanTypeScreen}
        options={{
          headerTitle: '', // Set clear header title
        }}
      />
        <Stack.Screen
          name="CustomerScan" 
          component={CustomerScreen}
          options={{
            headerTitle: '', // Optional: Set header title
          }}
        />
        {/* Insert CustomerQRScanner screen here for proper navigation flow */}
      <Stack.Screen
        name="Gallery"
        component={GalleryPermissionScreen}
        options={{
          headerTitle: '', // Set clear header title for user context
        }}
      />
      <Stack.Screen
        name="Camera"
        component={OpenCamera}
        options={{
          headerTitle: '', // Set clear header title for user context
        }}
      />
      <Stack.Screen
        name="Video"
        component={VideoScreen}
        options={{
          headerTitle: '', // Set clear header title for user context
        }}
      />
      </Stack.Navigator>
    );
  };
  
  export default Routes;