import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const ScannedImagesGrid = ({ scannedImages }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.recentsText}>Recents</Text>
      <FlatList
        data={scannedImages}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.image} />
        )}
        numColumns={3} // Adjust for desired number of columns
        keyExtractor={(item) => item.id} // Assuming 'id' property for each image
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recentsText: {
    fontSize: 30, // Adjust font size for desired faintness
    opacity: 0.3, // Adjust opacity for faintness
    textAlign: 'center',
    marginBottom: 10, // Adjust spacing
  },
  image: {
    width: 100,
    height: 100,
    margin: 5, // Adjust spacing between images
  },
  contentContainer: {
    paddingBottom: 50, // Add padding to avoid scrollbar overlapping images
  },
});

export default ScannedImagesGrid;