import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as Permissions from 'react-native-permissions';

const GalleryPermissionScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(false);

  const handlePermissionRequest = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status === 'granted') {
      setHasPermission(true);
      console.log('Photo library permission granted');
    } else {
      console.log('Photo library permission denied');
      // Handle permission denied scenario (e.g., display an alert)
    }
  };

  return (
    <View style={styles.container}>
      {/* Background color */}
      <View style={styles.backgroundColor} />

      {/* Permissions container card with rounded top */}
      <View style={styles.permissionCard}>
        <Text style={styles.permissionText}>Permission</Text>

        <Text style={styles.grantAccessText}>
          Grant access to your photos for seamless scanning
        </Text>

        {/* Rectangular containers for permission options */}
        <View style={styles.permissionOptionContainer}>
          <TouchableOpacity style={styles.permissionOption}>
            <Text style={styles.permissionOptionText}>Allow access to all photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.permissionOption}>
            <Text style={styles.permissionOptionText}>Allow access to selected photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.permissionOption}>
            <Text style={styles.permissionOptionText}>Deny access to photos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Semicircle card with "Choose From The Gallery" text and gallery icon */}
      <View style={styles.galleryCard}>
        <Text style={styles.galleryCardText}>Choose From The Gallery</Text>
        <Image source={require('../assets/images/galleryIcon.png')} style={styles.galleryIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Adjust background color as needed
  },
  backgroundColor: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  permissionCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginTop: 100, // Adjust spacing as needed
  },
  permissionText: {
    fontSize: 16,
    color: 'gray', // Adjust color as needed
  },
  grantAccessText: {
    fontSize: 14,
    marginBottom: 10, // Adjust spacing as needed
  },
  permissionOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute options horizontally
  },
  permissionOption: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
  permissionOptionText: {
    fontSize: 12,
  },
  galleryCard: {
    backgroundColor: '#ccc', // Adjust background color as needed
    borderRadius: 50, // Adjust for semicircle shape
    padding: 20,
    marginTop: 50, // Adjust spacing as needed
    alignItems: 'center', // Center content horizontally
  },
  galleryCardText: {
    fontSize: 16,
    marginBottom: 10, // Adjust spacing as needed
  },
  galleryIcon: {
    width: 50,
    height: 50, // Adjust image size as needed
  },
});

export default GalleryPermissionScreen;