import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For icons

import HomeScreen from '../screens/HomeScreen';
import PartnerScreen from '../screens/PartnerScanScreen';
import CustomerScreen from '../screens/CustomerScanScreen';
import PartnerQRScanner from '../screens/PartnerScannerQR'; 
import CustomerQRScanner from '../screens/CustomerScannerQR';
import GalleryPermissionScreen from '../screens/GalleryPermissionScreen';
import ScanTypeScreen from '../screens/ScanTypePartner';
import PhotoGridScreen from '../screens/PhotoGridScreen';

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
        {/* Insert PartnerScannerQR screen here for proper navigation flow */}
      <Stack.Screen
        name="PartnerQRScanner"
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
        name="CustomerQRScan" // Clear name for QR scanning functionality
        component={CustomerQRScanner}
        options={{
          headerTitle: '', // Set clear header title for user context
        }}
      />
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryPermissionScreen}
        options={{
          headerTitle: '', // Set clear header title for user context
        }}
      />
      <Stack.Screen
        name="PhotoGridScreen"
        component={PhotoGridScreen}
        options={{
          headerTitle: '', // Optional: Set a clear header title
        }}
      />
      </Stack.Navigator>
    );
  };
  
  export default Routes;