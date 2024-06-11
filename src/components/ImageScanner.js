import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

const ImageScanner = ({ onPress }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    if (isAnimating) {
      onPress();
    }
  };

  const startAnimation = () => {
    setIsAnimating(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  };

  const LineAnimation = ({ animation, style }) => (
    <Animated.View
      style={[styles.lineAnimation, { height: animation.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) }]}>
    </Animated.View>
  );

  
  return (
    <View style={styles.container}>
      {/* Background image (optional) */}
      <Image
        source={require('../assets/images/backgroundImg.png')} // Replace with your image path
        style={styles.backgroundImage}
      />

      {/* Square box with QR code image and animation (centered slightly above center) */}
      <TouchableOpacity onPress={startAnimation} style={styles.squareBox}>
        <Text style={styles.scanText}>Scan Your QR Code</Text>
        <View style={styles.qrImageContainer}>
          <Image source={require('../assets/images/partnerScanImage.png')} style={styles.qrImage} />
          {isAnimating && <LineAnimation animation={animation} style={styles.lineAnimation} />}
        </View>
      </TouchableOpacity>

      {/* Rounded rectangular card below the square box (centered at the bottom) */}
      <View style={styles.cardContainer}>
        {/* Your image and content for the rounded rectangular card goes here */}
        <Image source={require('../assets/images/ScanQRCodeimg.png')} // Replace with your QR code image path
          style={styles.qrCodeImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes container take up the whole screen
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust as needed
  },
  squareBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center', // Center content vertically
    top: '40%', // Adjust vertical position slightly above center (e.g., 40%)
    transform: [{ translateY: -50 }], // Adjust vertical position further if needed
  },
  scanText: {
    color: 'black', // Adjust color as needed
    fontSize: 18,
    marginBottom: 20,
  },
  qrImageContainer: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  qrImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  lineAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    position: 'absolute',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    bottom: '20%', 
    marginTop: 30,// Position at the bottom
  },
  qrCodeImage: {
    // Adjust width and height for your QR code image
    width: 100,
    height: 100,
  },

  '@media (max-width: 375px)': { // Adjust breakpoint for smaller screens
    squareBox: {
      width: '80%', // Adjust width for smaller screens
    },
    qrImageContainer: {
      width: '100%', // Make container fit image on smaller screens
      height: '100%',
    },
  },
});


export default ImageScanner;