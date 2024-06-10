import React, { useState, useEffect } from 'react';
import { View, Text, Image, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera'; // Import from barcode scanner library

const CameraScanner = ({ navigation }) => {
  // Animate the line position for the line animation effect
  const linePosition = new Animated.Value(0);
  const animate = Animated.loop(
    Animated.sequence([
      Animated.timing(linePosition, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true, // Improve performance
      }),
      Animated.timing(linePosition, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ])
  );

  const [isAnimating, setIsAnimating] = useState(false); // Track animation state
  const [barcodeData, setBarcodeData] = useState(null); // State to store scanned barcode data

  useEffect(() => {
    if (isAnimating) {
      animate.start();
    } else {
      animate.stop();
    }
    return () => animate.stop();
  }, [isAnimating]); // Re-run effect on state change

  const handleBoxClick = () => {
    setIsAnimating(!isAnimating); // Toggle animation on box click
  };

  const handleCardClick = () => {
    navigation.navigate('NextScreen'); // Navigate to next screen on card click
  };

  const handleBarcodesDetected = ({ barcodes }) => {
    if (barcodes.length > 0) {
      setBarcodeData(barcodes[0].data); // Extract data from the first barcode
    }
  };

  return (
    <View style={styles.container}>
      {/* Text container (Scan Your QR Code) */}
      <View style={styles.textContainer}>
        <Text style={styles.scanText}>Scan Your QR Code</Text>
      </View>

      {/* Scanner view (square outline + image container) */}
      <RNCamera
        onBarcodesDetected={handleBarcodesDetected}
        style={styles.scannerView}
      >
        {({ camera }) => (
          <View style={styles.scannerView}>
            {/* Incomplete square outline */}
            <View style={styles.squareOutline}>
              <View style={[styles.squareOutlineTop, styles.squareOutlineLeft]} />
              <View style={[styles.squareOutlineTop, styles.squareOutlineRight]} />
            </View>

            {/* Image container with line animation */}
            <View style={styles.imageContainer}>
              <Image source={require('../assets/images/yourImage.png')} style={styles.image} />
              {/* Animated line */}
              <Animated.View style={[styles.line, { bottom: linePosition }]} />
            </View>
          </View>
        )}
      </RNCamera>

      {/* Display scanned barcode data (optional) */}
      {barcodeData && (
        <Text style={styles.scannedText}>Scanned Barcode: {barcodeData}</Text>
      )}

      {/* Card container (rounded rectangle) */}
      <TouchableOpacity onPress={handleCardClick}>
        <View style={styles.cardContainer}>
          <Image source={require('../assets/images/cardImage.png')} style={styles.cardImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Adjust background color
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  scanText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  scannerView: {
    marginTop: 20,
    alignItems: 'center',
  },
  squareOutline: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'gray',
    position: 'relative', // Enable child absolute positioning
  },
  squareOutlineTop: {
    position: 'absolute',
    top: 0,
  },
  squareOutlineLeft: {
    position: 'absolute',
    left: 0,
    borderRightWidth: 0, // Remove right border for incomplete square
  },
  squareOutlineRight: {
    position: 'absolute',
    right: 0,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  line: {
    width: 2,
    backgroundColor: 'red', // Adjust line color
    height: 100, // Adjust line height
  },
  cardContainer: {
    backgroundColor: '#fff', // Adjust card background color
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginHorizontal: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

export default CameraScanner;