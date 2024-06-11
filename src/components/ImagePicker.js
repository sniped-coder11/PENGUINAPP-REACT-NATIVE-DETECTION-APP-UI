import { useState } from 'react';
import { Button, Image, View, StyleSheet, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MultiImagePicker() {
  const [selectedImages, setSelectedImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      selectionLimit: 5, // Allow selection of up to 5 images (adjust as needed)
    });

    if (!result.canceled) {
      setSelectedImages(result.assets.map((asset) => asset.uri));
    }
  };

  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <Button title="Pick Images from Gallery" onPress={pickImage} />
      {selectedImages.length > 0 && (
        <FlatList
          data={selectedImages}
          renderItem={renderItem}
          numColumns={3} // Adjust for desired number of columns
          keyExtractor={(item) => item} // Assuming image URIs are unique
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </View>
  );
}

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