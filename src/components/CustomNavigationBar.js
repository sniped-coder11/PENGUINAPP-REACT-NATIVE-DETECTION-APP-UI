import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const CustomBottomNavigation = ({ navigation, tabBarData }) => {
  const handlePress = (screenName) => navigation.navigate(screenName);

  return (
    <View style={styles.container}>
      {tabBarData.map((item) => (
        <TouchableOpacity key={item.name} onPress={() => handlePress(item.name)}>
          <View style={styles.tabItem}>
            <Image source={item.image} style={styles.icon} />
            <Text style={styles.label}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Position at the bottom
    bottom: 0,
    left: 0,
    right: 0,
    height: 60, // Adjust height as needed
    backgroundColor: '#fff', // Match your home screen background color (adjust)
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute tabs evenly
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 12,
  },
});

export default CustomBottomNavigation;