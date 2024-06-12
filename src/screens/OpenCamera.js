import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomBottomNavigation from '../components/CustomNavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const OpenCamera = ({ navigation }) => {
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


  const [imgUrl, setImgUrl] = useState(null); // Initialize imgUrl to null

  const openCamera = async () => {
    // Request camera permission
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera access to scan QR codes!');
      return;
    }

    // Launch camera and capture image
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, // Allow users to edit the captured image (optional)
      aspect: [4, 3], // Set aspect ratio for the captured image (optional)
    });

    // Handle successful capture
    if (!result.cancelled) {
      setImgUrl(result.uri);
    }
  };

  const handleProceed = () => {
      navigation.navigate('VideoScreen');
  };

  return (
    <View style={styles.container}>
      {/* Background color */}
      <View style={styles.background}>
        {/* Empty view to maintain space */}
      </View>

      <View style={styles.content}>
        <Image
          source={imgUrl ? { uri: imgUrl } : require('../assets/images/backgroundImg.png')} // Display captured image or placeholder
          resizeMode="contain"
          style={styles.img}
        />

        <TouchableOpacity style={styles.btnCamera} onPress={openCamera}>
          <Text style={styles.textBtn}>Open Camera To Scan</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.goBackButton}>
            <MaterialCommunityIcons name="chevron-left" size={32} color="black" />
        </TouchableOpacity>

      {/* Custom Bottom Navigation */}
      <CustomBottomNavigation navigation={navigation} tabBarData={tabBarData} />

    </View>
  );
};

export default OpenCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1, // Occupy full height
    backgroundColor: '#112D63', // Example background color
  },
  content: {
    position: 'absolute', // Position content absolutely
    top: 0, // Start at top
    left: 0, // Start at left
    right: 0, // Fill entire width
    bottom: 0, // Fill entire height
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  img: {
    width: '90%',
    height: 240,
    alignSelf: 'center',
    borderRadius: 6,
  },
  btnCamera: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: 180,
    height: 60,
    marginTop:20,
    backgroundColor: 'green',
  },
  textBtn: {
    color: '#fff',
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
    marginBottom:32, // Add a slight shadow effect (optional)
  },
  proceedText: {
    color: '#fff', // Text color for the button
    fontSize: 16, // Font size for the button text
    fontWeight: 'bold', // Make the text bold (optional)
  },
});