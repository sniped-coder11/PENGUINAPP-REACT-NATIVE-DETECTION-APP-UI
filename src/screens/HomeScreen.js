import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import CustomBottomNavigation from '../components/CustomNavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



//import { useFonts } from '@expo/expo-font';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  const partnerImage = require('../assets/images/partnerImg.png');
  const customerImage = require('../assets/images/customerImg.png');
  const backgroundImage = require('../assets/images/backgroundImg.png');
  const iconContainerImage = require('../assets/images/icon-container.png');
  const homeImg = require('../assets/images/home.png');
  const galleryImg = require('../assets/images/galleryIcon.png');
  const cameraImg = require('../assets/images/cameraIcon.png');
  const photoLibImg = require('../assets/images/scannedImg.png'); 
  const tabBarData = [ // Sample tab bar data
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
          <TouchableOpacity onPress={() => navigation.navigate('PartnerScan')}>
            <View style={styles.card}>
              <ImageBackground source={iconContainerImage} style={styles.iconContainer}>
                <Image source={partnerImage} style={styles.cardIcon} />
              </ImageBackground>
              <Text style={styles.cardText}>Partner</Text>
            </View>
          </TouchableOpacity>

          {/* Customer Card */}
          <TouchableOpacity onPress={() => navigation.navigate('CustomerScan')}>
            <View style={styles.card}>
              <ImageBackground source={iconContainerImage} style={styles.iconContainer}>
                <Image source={customerImage} style={styles.cardIcon} />
              </ImageBackground>
              <Text style={styles.cardText}>Customer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      

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
    padding: 45,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    marginVertical: 15,
    height: 130,
  },
  iconContainer: {
    width: 50,
    height: 50,
  },
  cardIcon: {
    //position: 'absolute',
    top: 4, // Adjust vertical position
    left: 1, // Adjust horizontal position
    height: 45,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    //fontFamily: 'AdaminaRegular', // Corrected typo (lowercase 'r')
  },
});

export default HomeScreen;