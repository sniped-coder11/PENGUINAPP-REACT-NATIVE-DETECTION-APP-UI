import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

 const SimpleQRScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  const requestCameraPermission = async () => {
    const cameraPermission = await RNCamera.requestCameraPermission();
    setHasPermission(cameraPermission === RNCamera.Constants.CameraStatus.GRANTED);
  };

  const handleScannedCode = (data) => {
    console.log('QR Code Data:', data.data); // Replace with your logic to handle scanned data
    // You can also navigate to another screen here
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>Camera permission denied. Please grant permission in settings.</Text>
        <Button title="Request Permission" onPress={requestCameraPermission} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={cameraRef}
          style={styles.camera}
          onBarCodeScanned={handleScannedCode}
        />
        <Button title="Open Camera" onPress={requestCameraPermission} disabled={hasPermission} />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '80%', // Adjust height as needed
  },
});


export default SimpleQRScanner;