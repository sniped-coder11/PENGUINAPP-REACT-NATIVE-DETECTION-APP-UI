import React from 'react';
import ImagesGrid from '../components/ScannedImagesGrid'; // Assuming ScannedImagesGrid.js is in the same directory

const PhotoGridScreen = () => {
  const scannedImages = [
    { id: '1', uri: require('../assets/images/scan1.png') }, 
    { id: '2', uri: require('../assets/images/scan2.png') }, 
    { id: '3', uri: require('../assets/images/scan3.png') },
    // ... more scanned images
  ];

  return (
    <ImagesGrid scannedImages={scannedImages} />
  );
};

export default PhotoGridScreen;