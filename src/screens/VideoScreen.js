import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity, Button, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomBottomNavigation from '../components/CustomNavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const VideoScreen = ({ navigation, videoSource = require("../assets/videos/finalvideoedit.mp4") }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isFocused, setIsFocused] = useState(false); // Track screen focus
  const { width, height } = Dimensions.get('window'); // Get screen dimensions
  
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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsFocused(true);
      // Autoplay the video only when the screen gains focus
      if (video.current) {
        video.current.playAsync();
      }
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      setIsFocused(false);
      // Pause the video when the screen loses focus
      if (video.current) {
        video.current.pauseAsync();
      }
    });

    return () => {
      unsubscribe();
      unsubscribeBlur();
    };
  }, [navigation]); // Add navigation as a dependency for effect

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={videoSource}
        useNativeControls
        resizeMode="contain" // Maintain aspect ratio
        onPlaybackStatusUpdate={setStatus}
        // Set autoPlay only when the screen is focused
        shouldPlay={isFocused}
      />
      {status.isPlaying && <Text>Transportational-flow!</Text>}
      
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
    alignSelf: 'cover',
    width: '450%',
    height: '120%',
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
