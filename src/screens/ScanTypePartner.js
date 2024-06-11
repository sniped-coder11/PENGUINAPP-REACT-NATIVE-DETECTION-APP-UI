import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import CustomBottomNavigation from '../components/CustomNavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//import { useFonts } from '@expo/expo-font';
const Tab = createBottomTabNavigator();

const ScanTypeScreen = ({ navigation }) => {
  const vehicleImage = require('../assets/images/vehicleImg.png');
  const landImage = require('../assets/images/landImg.png');
  const backgroundImage = require('../assets/images/backgroundImg.png');
  const iconContainerImage = require('../assets/images/icon-container.png');
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
  
  //const [fontsLoaded] = useFonts({
    //AdaminaRegular: require('../assets/fonts/Adamina-Regular.ttf'),
  //});

  /*if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }*/

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.colorOverlay} />

        {/* Cards container with vertical centering */}
        <View style={[styles.cardsContainer, { justifyContent: 'center' }]}>
          {/* Partner Card */}
          <TouchableOpacity onPress={() => navigation.navigate('PartnerQRScanner')}>
            <View style={styles.card}>
              <ImageBackground source={iconContainerImage} style={styles.iconContainer}>
                <Image source={vehicleImage} style={styles.cardIcon} />
              </ImageBackground>
              <Text style={styles.cardText}>Vehicle</Text>
            </View>
          </TouchableOpacity>

          {/* Customer Card */}
          <TouchableOpacity onPress={() => navigation.navigate('PartnerQRScanner')}>
            <View style={styles.card}>
              <ImageBackground source={iconContainerImage} style={styles.iconContainer}>
                <Image source={landImage} style={styles.cardIcon} />
              </ImageBackground>
              <Text style={styles.cardText}>Land</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>

        <TouchableOpacity style={styles.goBackButton}>
            <MaterialCommunityIcons name="chevron-left" size={32} color="black" />
        </TouchableOpacity>

      {/* Custom Bottom Navigation */}
      <CustomBottomNavigation navigation={navigation} tabBarData={tabBarData} />

       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers cards vertically (optional, can be removed)
    backgroundColor: '#112D63',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    // Set zIndex to a lower value (e.g., -1) to place it behind the cards
    zIndex: -1,
  },
  colorOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    // Set zIndex to a lower value (e.g., -1) to place it behind the cards
    zIndex: -1,
  },
  cardsContainer: {
    position: 'absolute',
    top: 0, // Position from top of the container
    left: 0, // Position from left of the container
    right: 0, // Position from right of the container
    bottom: 0, // Position from bottom of the container
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#B3E5FC', // Remove background color to respect icon container image
    borderRadius: 5,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginVertical: 14,
    height: 120,
  },
  iconContainer: {
    width: 80,
    height: 60,
  },
  cardIcon: {
    //position: 'absolute',
    top: 6, // Adjust vertical position
    left: 7, // Adjust horizontal position
    height: 45,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    //fontFamily: 'AdaminaRegular', // Corrected typo (lowercase 'r')
  },
});

export default ScanTypeScreen;