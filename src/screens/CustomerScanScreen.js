import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Import for go back button icon
import CardContainer from '../components/Card-Container'; // Import CardContainer
import CustomBottomNavigation from '../components/CustomNavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const CustomerScreen = ({ navigation }) => {
  const backgroundImage = require("../assets/images/backgroundImg.png");
  const galleryIcon = require("../assets/images/galleryIcon.png");
  const cameraIcon = require('../assets/images/cameraIcon.png');
  const homeImg = require('../assets/images/home.png');
  const photoLibImg = require('../assets/images/scannedImg.png'); 
  const tabBarData = [ 
    { name: 'Home', image: homeImg },
    { name: 'Gallery', image: galleryIcon },
    { name: 'Camera', image: cameraIcon },
    { name: 'Library', image: photoLibImg },
  ];

  const cardOptions = [
    {
      title: "Use Camera To Scan",
      icon: cameraIcon,
      onPress: () => navigation.navigate("CustomerScan"),
    },
    {
      title: "Choose from Gallery",
      icon: galleryIcon,
      onPress: () => navigation.navigate("GalleryScreen"),
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        {  }
        {/* <View style={styles.cardsContainer}>
          {cardOptions.map((option, index) => (
            <Card
              key={index}
              title={option.title}
              icon={<Image source={option.icon} style={styles.cardIcon} />} // Render icon image
              onPress={option.onPress}
            />
          ))}
        </View> */}

<View style={styles.cardContainerWrapper}>
  <CardContainer
    title="Use Camera To Scan"
    image={cameraIcon}
    onPress={() => navigation.navigate("CustomerQRScan")}
  />
  <CardContainer
    title="Choose From Gallery"
    image={galleryIcon}
    onPress={() => navigation.navigate("GalleryScreen")}
  />
</View>


        {/* Custom Bottom Navigation */}
      <CustomBottomNavigation navigation={navigation} tabBarData={tabBarData} />

        {/* Go back button */}
        <TouchableOpacity style={styles.goBackButton}>
          <MaterialCommunityIcons name="chevron-left" size={32} color="black" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  cardsContainer: {
    flex: 1, // Makes cards take up remaining space
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainerWrapper: {
    flex: 1, // Makes the wrapper take up all available space
    justifyContent: 'center', // Vertically center content within the wrapper
    alignItems: 'center',  
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
  cardIcon: {
    width: 30,
    height: 30, // Adjust icon size as needed
    resizeMode: "contain", // Maintain aspect ratio
  },
 
});

export default CustomerScreen;
