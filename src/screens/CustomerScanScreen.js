import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import for go back button icon

const CustomerScreen = () => {
  const backgroundImage = require('../assets/images/backgroundImg.png');
  const cameraIcon = require('../assets/images/cameraIcon.png'); // Replace with your card icon
  const galleryIcon = require('../assets/images/galleryIcon.png'); // Replace with your card icon

  return (
    <View style={styles.container}>
       <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        {/* Card container with vertical centering and spacing */}
        <View style={styles.cardsContainer}>
          {/* Customer Card */}
          <TouchableOpacity onPress={() => navigation.navigate('CustomerScan')}>
            <View style={styles.card}>
              <Image source={cameraIcon} style={styles.cardIcon} />
              <Text style={styles.cardText}>Use Camera To Scan</Text>
            </View>
          </TouchableOpacity>

          {/* Partner Card */}
          <TouchableOpacity onPress={() => navigation.navigate('PartnerScan')}>
            <View style={styles.card}>
              <Image source={galleryIcon} style={styles.cardIcon} />
              <Text style={styles.cardText}>Choose from Gallery</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Navigation bar placeholder */}
      <View style={styles.navBar}>
        <Text style={styles.navBarText}>Navigation Bar</Text>
      </View>

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
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  centeredCard: {
    flex: 1, // Makes it take up the remaining space
    justifyContent: 'center', // Centers card vertically
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#B3E5FC', // White background for card
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'space-between', // Space between icon and text
    height: 200, // Adjust card height as needed
  },
  cardIcon: {
    width: 100,
    height: 100, // Adjust icon size as needed
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  navBarText: {
    fontSize: 16,
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default CustomerScreen;