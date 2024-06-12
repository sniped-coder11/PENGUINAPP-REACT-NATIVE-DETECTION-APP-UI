import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Index'; // Import your navigation routes
//import SplashScreenComponent from './src/components/SplashScreenComponent'; // Import your splash screen component

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;