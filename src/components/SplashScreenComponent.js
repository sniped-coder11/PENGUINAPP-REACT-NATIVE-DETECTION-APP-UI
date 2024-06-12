import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
//import * as SplashScreen from 'expo-splash-screen'; // Import for splash screen API
const { width, height } = Dimensions.get('window'); // Get screen dimensions 

const SplashScreenComponent = ({ navigation }) => {

    const handleLogoPress = () => {
      //navigation.navigate('HomeScreen'); // Navigate to the Home screen
  };

  return (
    <View style={styles.container}>
      {/* Background image with overlay color (adjust opacity for desired mix) */}
      <Image
        source={require('../assets/images/backgroundImg.png')} // Replace with your image path
        style={[styles.backgroundImage, { backgroundColor: 'rgba(0, 0, 102, 0.4)' }]} // Add background color with opacity
      />
      {/* Company logo image positioned at the center */}
      <Image
        source={require('../assets/images/companyLogo.png')} // Replace with your image path
        style={styles.companyLogo}
      />
      {/* Secondary image positioned below the company logo, adjust spacing as needed */}
      <TouchableOpacity>
        <Image
        source={require('../assets/images/companyName.png')} // Replace with your image path
        style={[styles.secondaryImage, { marginTop: 40 }]}
        onPress={handleLogoPress} // Add spacing
      /></TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    width,
    height,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  companyLogo: {
    width: 200, // Adjust width as needed
    height: 100, // Adjust height as needed
  },
  secondaryImage: {
    width: 248, // Adjust width as needed
    height: 50, // Adjust height as needed
  },
});

export default SplashScreenComponent;