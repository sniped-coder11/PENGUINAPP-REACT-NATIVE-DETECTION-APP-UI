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

const QrCodeCard = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.qrCodeCardContainer}>
      <Text style={styles.qrCodeCardText}>Scan QR Code</Text>
    </TouchableOpacity>
  );
};

const CustomerQRScanner = ({ navigation }) => {
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
    if (hasPermission === null) {
      return; // Handle permission request if not granted yet
    }

    if (hasPermission === false) {
      // Request camera permission if not granted
      const { status } = await requestPermission();
      return;
    }

    try {
      const data = await cameraRef.current.barcodeScanAsync();
      const { data: qrData } = data; // Assuming QR code is the first element
      setScannedData(qrData);
      console.log('QR code data:', qrData); // Log the scanned data

      // Navigate to CustomerDetails screen with scanned data
      navigation.navigate('CustomerDetails', { qrData });
    } catch (err) {
      console.error('QR code scanning error:', err);
    }
  };

  useEffect(() => {
    if (hasPermission === null) {
      requestPermission();
    }
  }, []);

  return (
    <View style={styles.container}>
      {hasPermission === false && <Text>Camera permission denied.</Text>}

      {hasPermission === true && (
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={handleQrCodeScan}
          barCodeTypes={[Camera.Constants.BarCodeType.QR_CODE]}
        />
      )}

      {/* Content container on top of the camera preview */}
      <View style={styles.contentContainer}>
        <Text style={styles.topText}>Scan Your QR Code</Text>

        <QrCodeCard onPress={handleQrCodeScan} />

        <CustomBottomNavigation navigation={navigation} tabBarData={tabBarData} />
      </View>

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
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust as needed
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

export default CustomerQRScanner;