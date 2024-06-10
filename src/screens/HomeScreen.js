import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import CustomBottomNavigation from '../components/CustomNavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const HomeScreen = ({ navigation }) => {
  const partnerImage = require('../assets/images/partnerImg.png');
  const customerImage = require('../assets/images/customerImg.png');
  const backgroundImage = require('../assets/images/backgroundImg.png');
  const tabBarData = [ // Sample tab bar data
    { name: 'Partner', image: partnerImage },
    { name: 'Customer', image: customerImage },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.colorOverlay} />

        {/* Cards container with vertical centering */}
        <View style={[styles.cardsContainer, { justifyContent: 'center' }]}>
          {/* Partner Card */}
          <TouchableOpacity onPress={() => navigation.navigate('PartnerScan')}>
            <View style={styles.card}>
              <Image source={partnerImage} style={styles.cardIcon} />
              <Text style={styles.cardText}>Partner</Text>
            </View>
          </TouchableOpacity>

          {/* Customer Card */}
          <View style={styles.card}>
            <Image source={customerImage} style={styles.cardIcon} />
            <Text style={styles.cardText}>Customer</Text>
          </View>
        </View>
      </ImageBackground>

      {/* Navigation bar placeholder (replace with your navigation setup) */}
      {/* Custom Bottom Navigation */}
      <CustomBottomNavigation navigation={navigation} tabBarData={tabBarData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers cards vertically (optional, can be removed)
    backgroundColor: '#112D63',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  colorOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: 100,
  },
  card: {
    backgroundColor: '#B3E5FC',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    marginVertical: 10,
  },
  cardIcon: {
    marginBottom: 10,
    height: 48,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;