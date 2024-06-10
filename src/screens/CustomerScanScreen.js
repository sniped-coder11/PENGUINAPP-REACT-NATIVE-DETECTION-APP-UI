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
import Card from '../components/Card'; // Import your Card component

const CustomerScreen = ({ navigation }) => {
  const backgroundImage = require('../assets/images/backgroundImg.png');
  const cameraIcon = require('../assets/images/cameraIcon.png');
  const galleryIcon = require('../assets/images/galleryIcon.png');

  const cardOptions = [
    { title: 'Use Camera To Scan', icon: cameraIcon, onPress: () => navigation.navigate('CustomerScan') },
    { title: 'Choose from Gallery', icon: galleryIcon, onPress: () => navigation.navigate('PartnerScan') },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

        {/* Card container with vertical centering and spacing */}
        <View style={styles.cardsContainer}>
          {cardOptions.map((option, index) => (
            <Card
              key={index}
              title={option.title}
              icon={<Image source={option.icon} style={styles.cardIcon} />} // Render icon image
              onPress={option.onPress}
            />
          ))}
        </View>

        {/* Navigation bar placeholder */}
        <View style={styles.navBar}>
          <Text style={styles.navBarText}>Navigation Bar</Text>
        </View>

        {/* Go back button */}
        <TouchableOpacity style={styles.goBackButton}>
          <MaterialCommunityIcons name="chevron-left" size={32} color="black" />
        </TouchableOpacity>
      </ImageBackground>
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
  cardsContainer: {
    flex: 1, // Makes cards take up remaining space
    justifyContent: 'center',
    alignItems: 'center',
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
  cardIcon: {
    width: 30,
    height: 30, // Adjust icon size as needed
    resizeMode: 'contain', // Maintain aspect ratio
  },
  // ...ther styles (refer to previous code for remaining styles)
});

export default CustomerScreen;