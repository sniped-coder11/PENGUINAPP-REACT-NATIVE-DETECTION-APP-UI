import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Video } from 'expo-av';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomBottomNavigation from '../components/CustomNavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const VideoScreen = ({ navigation, videoSource = require("../assets/videos/finalvideo.mp4") }) => {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  
  const homeImg = require('../assets/images/home.png');
  const galleryImg = require('../assets/images/galleryIcon.png');
  const cameraImg = require('../assets/images/cameraIcon.png');
  const photoLibImg = require('../assets/images/scannedImg.png');
  const tabBarData = [
    { name: 'Home', image: homeImg },
    { name: 'Gallery', image: galleryImg },
    { name: 'Camera', image: cameraImg },
    { name: 'Video', image: photoLibImg },
  ];

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={videoSource}
        useNativeControls
        resizeMode="cover" // Ensure full-screen coverage
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        <Button title='Understand the Transportational Flow'></Button>

      </View>
      <StatusBar style="auto" />

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
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
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