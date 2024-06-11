import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MultiImagePicker from '../components/ImagePicker'; // Assuming MultiImagePicker.js is in the same directory

const PhotoGridScreen = () => {
  const [selectedImages, setSelectedImages] = useState([]); // Use state from MultiImagePicker

  const handleImagesPicked = (pickedImages) => {
    setSelectedImages(pickedImages); // Update state with picked images
  };

  return (
    <View style={styles.container}>
      <MultiImagePicker onImagePicked={handleImagesPicked} /> {/* Pass callback function */}
      {selectedImages.length > 0 && (
        <FlatList
          data={selectedImages}
          renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
          numColumns={3} // Adjust for desired number of columns
          keyExtractor={(item) => item} // Assuming image URIs are unique
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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

export default PhotoGridScreen;