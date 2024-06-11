import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
    <TouchableOpacity onPress={startAnimation} style={styles.squareBox}>
      <Text style={styles.scanText}>Scan Your QR Code</Text>
      <View style={styles.qrImageContainer}>
        <Image source={require('../assets/images/QRCodeImg.png')} style={styles.qrImage} />
        {isAnimating && <LineAnimation animation={animation} style={styles.lineAnimation} />}
      </View>
    </TouchableOpacity>
  );
};

const QrCodeCard = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.qrCodeCardContainer}>
        <Image
          source={require('../assets/images/ScanQRCodeimg.png')} // Replace with your image
          style={styles.qrCodeCardImage}
        />
        <Text style={styles.qrCodeCardText}>Scan QR Code</Text>
      </TouchableOpacity>
    );
  };
  
  const CustomerQRScanner = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scannedData, setScannedData] = useState(null);
    const cameraRef = useRef(null);
  
    const handleQrCodeScan = async () => {
      if (hasPermission === null) {
        return; // Handle permission request if not granted yet
      }
  
      if (hasPermission === false) {
        // Request camera permission if not granted
        const status = await RNCamera.requestCameraPermission();
        setHasPermission(status);
        return;
      }

      try {
        const data = await cameraRef.current.readRNBarcodes();
        const { data: qrData } = data[0]; // Assuming QR code is the first element
        setScannedData(qrData);
        console.log('QR code data:', qrData); // Log the scanned data

        // Navigate to CustomerDetails screen with scanned data
        navigation.navigate('CustomerDetails', { qrData });

      } catch (err) {
        console.error('QR code scanning error:', err);
      }
    };
  
    useEffect(() => {
      (async () => {
        const status = await RNCamera.requestCameraPermission();
        setHasPermission(status);
      })();
    }, []);
  
    return (
      <View style={styles.container}>
        {/* Background image */}
        <Image
          source={require('../assets/images/backgroundImg.png')} // Replace with your image path
          style={styles.backgroundImage}
        />
  
        {/* Content container on top of the background image */}
        <View style={styles.contentContainer}>
          <Text style={styles.topText}>Scan Your QR Code</Text>
  
          <ImageScanner />
  
          {/* Elongated rounded rectangular container */}
          <TouchableOpacity style={styles.elongatedContainer} onPress={handleQrCodeScan}>
            <Text style={styles.elongatedContainerText}>Scan QR Code</Text>
            {/* Add any other content you want here */}
          </TouchableOpacity>
  
          <QrCodeCard onPress={handleQrCodeScan} />
  
          {hasPermission === false && <Text>Camera permission denied.</Text>}
        </View>
        {hasPermission === true && (
          <RNCamera
            ref={cameraRef}
            style={StyleSheet.absoluteFillObject}
            onBarCodeScanned={handleQrCodeScan}
            captureAudio={false} // Optional: Disable audio recording (if not needed)
          />
        )}

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
  lineAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
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