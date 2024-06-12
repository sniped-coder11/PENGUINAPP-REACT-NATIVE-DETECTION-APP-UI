import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { Camera } from 'expo-camera';

const OpenCameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false); // Track camera state

  // Asynchronous request for camera permission
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const handlePressOpenCamera = async () => {
    if (hasCameraPermission === 'granted') {
      setIsCameraOpen(true); // Open camera on button press
    } else {
      alert('Camera permission is not granted. Please allow camera access in your device settings.');
    }
  };

  // Open camera after permission and state changes
  useEffect(() => {
    if (hasCameraPermission === 'granted' && isCameraOpen) {
      // Assuming cameraRef is set correctly
      cameraRef.current?.startAsync(); // Open the camera
    }
  }, [hasCameraPermission, isCameraOpen]);
  // Conditionally render components based on permission status
  return (
    <View style={styles.container}>
      {hasCameraPermission === null && (
        <View><Text>Requesting camera permission...</Text></View>
      )}
      {hasCameraPermission === false && (
        <Text>No access to camera</Text>
      )}
      {hasCameraPermission === 'granted' && ( // Render Camera only if permission granted
        <View style={styles.centeredContainer}>
          <Camera ref={setCameraRef} style={styles.camera} type={Camera.Constants.Type.back} />
          <Button title="Open Camera to Scan" onPress={handlePressOpenCamera} style={styles.styledButton} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Set background color here
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center', // Center elements vertically
    alignItems: 'center', // Center elements horizontally
  },
  camera: {
    flex: 1,
  },
  styledButton: {
    marginTop: 20, // Add margin from the camera preview
    backgroundColor: '#333', // Set button background color
    color: '#fff', // Set button text color
    borderRadius: 10, // Add rounded corners
  },
});

export default OpenCameraScreen;