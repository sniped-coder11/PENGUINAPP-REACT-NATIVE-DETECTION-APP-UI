import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ImageScanner from '../components/ImageScanner';
import CardContainer from '../components/Card-Container'; // Assuming CardContainer is in the same directory

const PartnerQRScanner = ({ navigation }) => {
  const handlePress = () => {
    // Handle click event (optional)
    navigation.navigate('NextScreen'); // Or perform other actions
  };

  return (
    <View style={styles.container}>
      {/* Background image (optional) - Assuming you have a separate component for this */}
      {/* Background image */}
      <Image
        source={require('../assets/images/backgroundImg.png')} // Replace with your image path
        style={styles.backgroundImage}
      />

      {/* Content container centered on top of background image */}
      <View style={styles.contentContainer}>
        <CardContainer
          title="Scan Your QR Code" // Set appropriate title for content
          iconContainerImage={require('../assets/images/partnerScanImage.png')} // Replace with placeholder image for scanning functionality
          onPress={handlePress} // Pass handlePress function for card tap action (optional)
        >
          <ImageScanner /> // Render ImageScanner component within CardContainer
        </CardContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust as needed (e.g., 'contain' for preserving aspect ratio)
  },
  contentContainer: {
    flex: 1, // Makes content container take up the whole screen (adjust if needed)
    justifyContent: 'center', // Center content vertically within the container
    alignItems: 'center', // Center content horizontally within the container
  },
});

export default PartnerQRScanner;