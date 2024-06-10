import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import for go back button icon

const ScanQRScreen = ({ navigation }) => {
  const backgroundImage = require('../assets/images/backgroundImg.png');
  const cameraIcon = require('../assets/images/cameraIcon.png'); // Replace with your card icon
  const iconContainerImage = require('../assets/images/icon-container.png');

  // Animated value for line animation
  const lineY = useRef(new Animated.Value(0)).current;

  const startLineAnimation = () => {
    Animated.timing(lineY, {
      toValue: 1, // Change to 1 for animating down (0 for up)
      duration: 1000, // Adjust duration as needed (in milliseconds)
      useNativeDriver: true, // Improves performance
      repeatMode: 'reverse', // Reverses animation after reaching the end
      repeatCount: Infinity, // Continuously loops the animation
    }).start();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        {/* Square text container */}
        <View style={styles.squareTextContainer}>
          <Text style={styles.squareText}>4-L</Text>
        </View>

        {/* Card container with vertical centering */}
        <View style={styles.centeredCard}>
          {/* Card with icon and text (wrapped in TouchableOpacity) */}
          <TouchableOpacity onPress={startLineAnimation}>
            <View style={styles.card}>
              {/* Animated line */}
              <Animated.View
                style={[styles.line, { transform: [{ translateY: lineY.interpolate({ inputRange: [0, 1], outputRange: [0, 150] }) }] }]} // Adjust outputRange for line height
              />
              <ImageBackground source={iconContainerImage} style={styles.iconContainer}>
                <Image source={cameraIcon} style={styles.cardIcon} />
              </ImageBackground>
              <Text style={styles.cardText}>Scan QR Code</Text>
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
  squareTextContainer: {
    position: 'absolute',
    top: 30, // Adjust vertical position as needed
    left: 20, // Adjust horizontal position as needed
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Add a white background
    borderRadius: 5,
  },
  squareText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  centeredCard: {
    flex: 1, // Makes it take up the remaining space
    justifyContent: 'center', // Centers card vertically
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff', // Set white background for card content
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between', // Space between icon and text
  },
  line: {
    position: 'absolute',
    left: '50%',
    width: 2, // Adjust line width as needed
    height: 0, // Adjust initial height (will be animated)
    backgroundColor: 'red', // Change color as needed
  },
  iconContainer: {
    width: 60,
    height: 60,
  },
  cardIcon: {
    width: '100%',
    height: '100%',
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

export default ScanQRScreen;
