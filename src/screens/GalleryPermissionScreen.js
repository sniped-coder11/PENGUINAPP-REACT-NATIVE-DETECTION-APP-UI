import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import CustomBottomNavigation from '../components/CustomNavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const GalleryPermissionScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null); // Permission status
  const [selectedImage, setSelectedImage] = useState(null); // Stores selected image URI

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

  const requestCameraRollPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const pickImage = async () => {
    // Check if permission is granted
    if (hasPermission === null) {
      await requestCameraRollPermission();
      return;
    }

    if (hasPermission === false) {
      alert('Sorry, we need camera roll permissions to access the gallery');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Allow only images
      allowsEditing: true, // Enable image editing
      aspect: [4, 3], // Optional aspect ratio
      quality: 1, // Optional image quality (0-1)
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const navigateToPhotoGrid = () => {
    if (selectedImage) {
      navigation.navigate('PhotoGridScreen', { imageUri: selectedImage }); // Pass selected image URI as a param
    } else {
      alert('Please select an image first');
    }
  };

  const handleProceed = () => {
    navigation.navigate('VideoScreen');
  };

  return (
    <View style={styles.container}>
      {/* Background color (optional) */}
      {/* <View style={styles.backgroundColor} /> */}

      {/* Semicircle card with "Choose From The Gallery" text and gallery icon */}
      <TouchableOpacity style={styles.galleryCard} disabled={hasPermission === false} onPress={pickImage}>
        <Image source={require('../assets/images/gallerycontainerImg.png')} style={styles.galleryCardImage} />
        {hasPermission === false && <Text>Permission Required</Text>}
      </TouchableOpacity>

      {/* Button to navigate to PhotoGridScreen (optional) */}
      {selectedImage && (
        <TouchableOpacity style={styles.photoGridButton} onPress={navigateToPhotoGrid}>
          <Text style={styles.photoGridButtonText}>View in PhotoGrid</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>


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
  proceedButton: {
    backgroundColor: '#4CAF50', // Example blue color
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 10, // Add vertical padding
    borderRadius: 8, // Set rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute', // Make the button absolute
    bottom: 130, // Adjust button position from the bottom
    left: 20, // Adjust button position from the left (optional)
    right: 20, //// Add a slight shadow effect (optional)
  },
  proceedText: {
    color: '#fff', // Text color for the button
    fontSize: 16, // Font size for the button text
    fontWeight: 'bold', // Make the text bold (optional)
  },

  galleryCard: {
    borderRadius: 60, // Adjust for semicircle shape
    padding: 20,
    alignItems: 'center', // Center content horizontally
    position: 'absolute', // Make the gallery card absolute
    bottom: 260,
    left: '18%',
    transform: [{ translateX: -50 }], // Center horizontally
  },
  photoGridButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    position: 'absolute', // Make the button absolute
    bottom: 50, // Adjust button position from the bottom
    right: 20, // Adjust button position from the right
  },
  photoGridButtonText: {
    fontSize: 16,
    color: 'black',
  },
  permissionCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    marginTop: 100,
    marginLeft: 30,
    marginRight: 30, // Adjust spacing as needed
  },
  permissionText: {
    fontSize: 16,
    color: 'gray', // Adjust color as needed
  },
  grantAccessText: {
    fontSize: 14,
    marginBottom: 10, // Adjust spacing as needed
  },
  permissionButton: {
    backgroundColor: '#eee',
    padding: 5,
    borderRadius: 5,
    marginTop: 12, // Add spacing after grant access text
  },
  permissionButtonText: {
    fontSize: 15,
    textAlign: 'left', // Center text within button
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