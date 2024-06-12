import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const OpenCamera = () => {
  const [imgUrl, setImgUrl] = useState(null); // Initialize imgUrl to null

  const openCamera = async () => {
    // Request camera permission
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera access to scan QR codes!');
      return;
    }

    // Launch camera and capture image
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, // Allow users to edit the captured image (optional)
      aspect: [4, 3], // Set aspect ratio for the captured image (optional)
    });

    // Handle successful capture
    if (!result.cancelled) {
      setImgUrl(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={imgUrl ? { uri: imgUrl } : require('../assets/images/backgroundImg.png')} // Display captured image or placeholder
        resizeMode="contain"
        style={styles.img}
      />

      <TouchableOpacity style={styles.btnCamera} onPress={openCamera}>
        <Text style={styles.textBtn}>Open Camera To Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OpenCamera;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    img:{
        width:'90%',
        height:300,
        alignSelf:'center',
        borderRadius:6,                                          
    },
    btnCamera:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 6,
        width:100,
        height:40,
        backgroundColor:'green'
    },
    textBtn:{
        color:'#fff',
    },
});