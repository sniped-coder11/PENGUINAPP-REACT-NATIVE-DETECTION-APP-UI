import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const HomeScreen = () => {
  const partnerImage = require('../assets/images/partnerImg.png');
  const customerImage = require('../assets/images/customerImg.png');

  return (
    <View style={styles.container}>
      {/* Cards container */}
      <View style={styles.cardsContainer}>
        {/* Partner Card */}
        <View style={styles.card}>
          <Image source={partnerImage} style={styles.cardIcon} />
          <Text style={styles.cardText}>Partner</Text>
        </View>
        {/* Customer Card */}
        <View style={styles.card}>
          <Image source={customerImage} style={styles.cardIcon} />
          <Text style={styles.cardText}>Customer</Text>
        </View>
      </View>

      {/* Navigation bar placeholder (replace with your navigation setup) */}
      <View style={styles.navBar}>
        <Text style={styles.navBarText}>Navigation Bar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center cards vertically
    backgroundColor: '#112D63',
},
  cardsContainer: {
    flexDirection: 'column', // Stack cards vertically
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
    marginVertical: 10, // Add margin between cards
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
  navBar: {
    position: 'absolute', // Position bar at the bottom
    bottom: 0,
    width: '100%',
    backgroundColor: '#F0F0F0', // Adjust background color if needed
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, // Add padding for content
  },
  navBarText: {
    fontSize: 16,
  },
});

export default HomeScreen;
