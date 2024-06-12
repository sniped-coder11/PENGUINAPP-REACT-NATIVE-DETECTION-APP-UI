import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-video';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomBottomNavigation from '../components/CustomNavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const VideoScreen = ({ videoSource }) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  

  const videoSource = require('./path/to/your/video.mp4');

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

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={videoSource}
        style={styles.video}
        useNativeControls
        resizeMode={Video.RESIZE_MODE_COVER} // Ensure full-screen coverage
        onPlaybackStatusUpdate={setStatus}
      />

        <TouchableOpacity style={styles.goBackButton}>
            <MaterialCommunityIcons name="chevron-left" size={32} color="black" />
        </TouchableOpacity>

        <CustomBottomNavigation navigation={navigation} tabBarData={tabBarData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
  },
  video: {
    width: '100%',
    height: '100%',
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

export default VideoScreen;