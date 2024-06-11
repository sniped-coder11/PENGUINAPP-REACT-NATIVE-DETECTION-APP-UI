import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CardContainer from '../components/Card-Container'; 

const PartnerScreen = ({ navigation }) => {
  const backgroundImage = require('../assets/images/backgroundImg.png');
  const cameraIcon = require('../assets/images/cameraIcon.png');
  const iconContainerImage = require('../assets/images/icon-container.png'); 

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        {/* Card container with vertical centering */}
        <View style={styles.centeredCard}>
          {/* Partner Card with icon container */}
          <CardContainer
            title="Use Camera To Scan"
            image={cameraIcon}
            onPress={() => navigation.navigate('PartnerQRScanner')}
          >
            {/* Place cameraIcon within CardContainer (optional) */}
            <Image source={cameraIcon} style={styles.cardIcon} />
          </CardContainer>
        </View>
        </ImageBackground>

       {/* Navigation bar placeholder */}
        <View style={styles.navBar}>
          <Text style={styles.navBarText}>Navigation Bar</Text>
        </View>
      
  
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
      position: 'absolute',
      top: 20, 
      left: 20, 
      width: 60, 
      height: 60, 
      resizeMode: 'contain',
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
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 10, // Add padding for better touch area
    },
  });
  
  export default PartnerScreen;