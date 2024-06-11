import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Camera } from 'expo-camera'; // Using expo-camera

const ImageScanner = ({ onPress }) => {
  const [isScanning, setIsScanning] = useState(false);
  const cameraRef = useRef(null);

  const handleBarcodesDetected = ({ barcodes }) => {
    if (barcodes.length > 0) {
      const { data } = barcodes[0]; // Extract data from the first barcode
      setIsScanning(false); // Stop scanning after detecting a QR code
      onPress(data); // Call the provided onPress handler with the QR code data
    }
  };

  useEffect(() => {
    if (isScanning) {
      cameraRef.current.askPermission().then(() => {
        setIsScanning(true); // Start camera after permission granted
      });
    }
  }, [isScanning]);

  return (
    <View style={styles.container}>
      {/* Background image (optional) */}
      <Image
        source={require('../assets/images/backgroundImg.png')} // Replace with your image path (optional)
        style={styles.backgroundImage}
      />

      {/* Camera preview */}
      {isScanning && (
        <Camera
          ref={cameraRef}
          style={styles.cameraPreview}
          onBarcodesDetected={handleBarcodesDetected}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'Scan QR codes using the camera',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'This app needs audio recording permission for ...', // Optional if needed
          }}
        />
      )}

      {/* Square box with scan text (remains for user guidance) */}
      <TouchableOpacity onPress={() => setIsScanning(true)} style={styles.squareBox}>
        <Text style={styles.scanText}>Scan Your QR Code</Text>
      </TouchableOpacity>

      {/* Rounded rectangular card below the square box (centered at the bottom) */}
      <View style={styles.cardContainer}>
        {/* Your image and content for the rounded rectangular card goes here */}
        <Image
          source={require('../assets/images/ScanQRCodeimg.png')} // Replace with your QR code image path (optional)
          style={styles.qrCodeImage}
        />
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
    resizeMode: 'cover', // Adjust as needed
  },
  squareBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    top: '40%', // Adjust vertical position slightly above center (e.g., 40%)
    transform: [{ translateY: -50 }], // Adjust vertical position further if needed
  },
  scanText: {
    color: 'black',
    fontSize: 18,
    marginBottom: 20,
  },
  cameraPreview: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '20%',
    marginTop: 30, // Position at the bottom
  },
  qrCodeImage: {
    // Adjust width and height for your QR code image
    width: 100,
    height: 100,
  },

  '@media (max-width: 375px)': { // Adjust breakpoint for smaller screens (optional)
    squareBox: {
      width: '80%', // Adjust width for smaller screens
    },
    qrImageContainer: {
      width: '100%',
      height: '100%',
    },
  },
});


export default ImageScanner;