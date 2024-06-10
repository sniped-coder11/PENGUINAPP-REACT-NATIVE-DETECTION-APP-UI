import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import for go back button icon
import CardContainer from '../components/Card-Container'; // Import CardContainer

const PartnerScreen = ({ navigation }) => {
    const backgroundImage = require('../assets/images/backgroundImg.png');
    const cameraIcon = require('../assets/images/cameraIcon.png'); // Replace with your card icon
    const iconContainerImage = require('../assets/images/icon-container.png'); // Replace with your icon container image path
  
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          {/* Card container with vertical centering */}
          <View style={styles.centeredCard}>
            {/* Partner Card with icon container */}
            <CardContainer
              title="Use Camera To Scan"
              image={cameraIcon}
              onPress={() => navigation.navigate('ScannerScreen')}
            >
              {/* Place cameraIcon within CardContainer (optional) */}
              <Image source={cameraIcon} style={styles.cardIcon} />
            </CardContainer>
          </View>
        </ImageBackground>
  
        {/* Go back button in top right corner */}
        <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
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
    cardIcon: {
      // Adjust position and size based on your icon container image
      position: 'absolute',
      top: 20, // Adjust vertical position
      left: 20, // Adjust horizontal position
      width: 60, // Adjust width
      height: 60, // Adjust height
      resizeMode: 'contain',
    },
    goBackButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 10, // Add padding for better touch area
    },
  });
  
  export default PartnerScreen;