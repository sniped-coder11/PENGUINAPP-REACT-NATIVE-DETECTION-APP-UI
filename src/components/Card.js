import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Card = ({ title, icon, iconContainerImage, onPress, backgroundColor, style }) => {
  console.log("icon ===> ", icon);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, backgroundColor && { backgroundColor }, style]}>
      {iconContainerImage && (
        <Image source={iconContainerImage} style={styles.iconContainer}>
          {icon && <Image source={icon} style={styles.cardIcon} />}
        </Image>
      )}
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 200, // Adjust card height as needed
    marginBottom: 20,
    backgroundColor: '#B3E5FC', // Add margin between cards
  },
  iconContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
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

export default Card;