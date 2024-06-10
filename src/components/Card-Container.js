import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

const CardContainer = ({ title, image, onPress, iconContainerImage }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <ImageBackground source={iconContainerImage} style={styles.iconContainer}>
          <Image source={image} style={styles.cardIcon} />
        </ImageBackground>
        <Text style={styles.cardText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#B3E5FC', // Set white background for card content
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between', // Space between icon and text
  },
  iconContainer: {
    width: 60,
    height: 60,
  },
  cardIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardContainer;