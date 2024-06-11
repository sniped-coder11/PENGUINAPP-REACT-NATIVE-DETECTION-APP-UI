import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
  } from 'react-native';
import { Camera, useCameraPermissions } from 'expo-camera';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomBottomNavigation from '../components/CustomNavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const SimpleQRScanner = ({ navigation }) => {
  const [hasPermission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState(null);
  const cameraRef = useRef(null);

  const homeImg = require('../assets/images/home.png');
  const galleryImg = require('../assets/images/galleryIcon.png');
  const cameraImg = require('../assets/images/cameraIcon.png');
  const photoLibImg = require('../assets/images/scannedImg.png');
  const tabBarData = [
    { name: 'Home', image: homeImg },
    { name: 'Gallery', image: galleryImg },
    { name: 'Camera', image: cameraImg },
    { name: 'Library', image: photoLibImg },
  ];
  
  const handleQrCodeScan = async () => {
    try {
      const data = await cameraRef.current.barcodeScanAsync();
      const { data: qrData } = data; // Assuming QR code is the first element
      setScannedData(qrData);
      console.log('QR code data:', qrData);

      // Handle scanned data (optional)
    } catch (err) {
      console.error('QR code scanning error:', err);
    }
  };

  useEffect(() => {
    if (hasPermission === null) {
      requestPermission();
    }
  }, []);

  const handleOpenCamera = async () => {
    const { status } = await requestPermission();
  
    if (status === 'granted') {
      // Camera permission granted, open camera
      console.log('Camera permission granted.');
    } else if (status === 'undefined') {
      console.log('Camera permission request is in progress.');
      // You can add a loading indicator here while waiting for permission
    } else {
      // Handle permission denial (optional)
      console.warn('Camera permission denied.');
    }
  };

  if (hasPermission === false) {
    return <Text>Camera permission denied.</Text>;
  }

  return (
    <View style={styles.container}>
      {cameraRef.current ? (
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={handleQrCodeScan}
          barCodeTypes={[Camera.Constants.BarCodeType.QR_CODE]} // Specify QR code type
        />
      ) : (
        <Text>Opening camera...</Text> // Placeholder while camera initializes
      )}

            <TouchableOpacity style={styles.openCameraButton} onPress={handleOpenCamera}>
                <Text style={styles.openCameraButtonText}>Open Camera</Text>
            </TouchableOpacity>

      <CustomBottomNavigation navigation={navigation} tabBarData={tabBarData} />

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
  contentContainer: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  topText: {
    color: 'black', // Adjust color as needed
    fontSize: 18,
    marginBottom: 50, // Adjust spacing as needed
  },
  squareBox: {
    backgroundColor: 'white', // Adjust background color as needed
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    position: 'relative', // Needed for line animation to work within
  },
  openCameraButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 340, // Adjust button position as needed
    left: 120, // Adjust button position as needed
  },
  openCameraButtonText: {
    fontSize: 16,
  },
  scanText: {
    color: 'black', // Adjust color as needed
    fontSize: 18,
    marginBottom: 20,
  },
  qrImageContainer: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  qrImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  qrCodeCardContainer: {
    backgroundColor: 'white', // Adjust background color as needed
    borderRadius: 10,
    padding: 20,
    top: 15,
    marginTop: 50, // Adjust spacing as needed
  },
  qrCodeCardImage: {
    width: '100%',
    height: '50%', // Adjust image height as needed
    resizeMode: 'contain', // Adjust resize mode as needed
  },
  qrCodeCardText: {
    color: 'black', // Adjust color as needed
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10, // Adjust spacing as needed
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
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default SimpleQRScanner;