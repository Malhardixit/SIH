import React, {useEffect, useState} from 'react';
import TouchID from 'react-native-touch-id';
import {
  Alert,
  BackHandler,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Fingerprint = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isAuth, setIsAuth] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  useEffect(() => {
    handleBiometric();
  });

  const handleBiometric = () => {
    TouchID.isSupported(optionalConfigObject).then(biometryType => {
      if (biometryType === 'FaceID') {
        console.log('FaceID is supported.');
      } else {
        console.log('TouchID is supported.');
        if (isAuth) {
          return null;
        }
        TouchID.authenticate('', optionalConfigObject)
          .then(success => {
            Alert.alert('Woah You made it');
            setIsAuth(true);
          })
          .catch(err => {
            BackHandler.exitApp();
          });
      }
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>Welcome to Payment System</Text>
      </View>
    </SafeAreaView>
  );
};

export default Fingerprint;
