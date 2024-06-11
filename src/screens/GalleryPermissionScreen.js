import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
//import * as Permissions from 'react-native-permissions';
import CustomBottomNavigation from '../components/CustomNavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//import { useFonts } from '@expo/expo-font';
const Tab = createBottomTabNavigator();



const GalleryPermissionScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const homeImg = require('../assets/images/home.png');
  const galleryImg = require('../assets/images/galleryIcon.png');
  const cameraImg = require('../assets/images/cameraIcon.png');
  const photoLibImg = require('../assets/images/scannedImg.png'); 
  const tabBarData = [ 
    { name: 'Home', image: homeImg },
    { name: 'Gallery', image: galleryImg },
    { name: 'Camera', image: cameraImg },
    { name: 'Library', image: photoLibImg },
  ];


  const handlePermissionRequest = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status === 'granted') {
      setHasPermission(true);
      console.log('Photo library permission granted');
    } else {
      console.log('Photo library permission denied');
      // Handle permission denied scenario (e.g., display an alert)
    }
  };

  return (
    <View style={styles.container}>
      {/* Background color */}
      <View style={styles.backgroundColor} />

      {/* Permissions container card with rounded top */}
      <View style={styles.permissionCard}>
        <Text style={styles.permissionText}>Permission</Text>

        <Text style={styles.grantAccessText}>
          Grant access to your photos for seamless scanning
        </Text>
        {/* Rectangular containers for permission options */}
        <View style={styles.permissionOptionContainer}>
          <TouchableOpacity style={styles.permissionOption}>
            <Text style={styles.permissionOptionText}>Allow access to all photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.permissionOption}>
            <Text style={styles.permissionOptionText}>Allow access to selected photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.permissionOption}>
            <Text style={styles.permissionOptionText}>Deny access to photos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Semicircle card with "Choose From The Gallery" text and gallery icon */}
      <View style={styles.galleryCard}>
            <Image source={require('../assets/images/gallerycontainerImg.png')} style={styles.galleryCardImage} />
            {/*<Text style={styles.galleryCardText}>Choose From The Gallery</Text>
            <Image source={require('../assets/images/galleryIcon.png')} style={styles.galleryIcon} />*/}
         </View>

        {/* Custom Bottom Navigation */}
        <CustomBottomNavigation navigation={navigation} tabBarData={tabBarData} />

        {/* Go back button */}
        <TouchableOpacity style={styles.goBackButton}>
            <MaterialCommunityIcons name="chevron-left" size={32} color="black" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08245C', // Adjust background color as needed
  },
  backgroundColor: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  permissionCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    marginTop: 100,
    marginLeft: 30,
    marginRight: 30,// Adjust spacing as needed
  },
  permissionText: {
    fontSize: 16,
    color: 'gray', // Adjust color as needed
  },
  grantAccessText: {
    fontSize: 14,
    marginBottom: 10, // Adjust spacing as needed
  },
  permissionOptionContainer: {
    // Remove flexDirection for vertical stacking
  },
  permissionOption: {
    backgroundColor: '#eee',
    padding: 7,
    borderRadius: 4,
    marginBottom: 12, // Add spacing between options
  },
  permissionOptionText: {
    fontSize: 12,
  },
  galleryCard: {
    borderRadius: 60, // Adjust for semicircle shape
    padding: 20,
    alignItems: 'center', // Center content horizontally
    position: 'absolute', // Make the gallery card absolute
    bottom: 150,
    left: '18%',
    transform: [{ translateX: -50 }], // Center horizontally
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  navBarText: {
    fontSize: 16,
  },
  goBackButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  //galleryCardText: {
   // fontSize: 16,
 //   marginBottom: 10, // Adjust spacing as needed
 // },
 // galleryIcon: {
 //   width: 50,
 //   height: 50, // Adjust image size as needed
 // },
});

export default GalleryPermissionScreen;