import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Linking,
  TouchableOpacity,
  Alert,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SlideShow from './SlideShow';
import {dummyData} from '../assets/consts/Data';
import {dummyDataName} from '../assets/consts/Aadhar';
import Profile from './Profile';
import {useBackHandler} from '@react-native-community/hooks';
import HomeIcon from './HomeIcon';
import {InputOTPScreen} from './InputOTPScreen';

const {height, width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  function backActionHandler() {
    Alert.alert('', 'Are you sure you want to exit the app?', [
      {
        text: 'No',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  }
  useBackHandler(backActionHandler);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      }}>
      <SlideShow data={dummyData} />
      <HomeIcon navigation={navigation} />
      <Profile data={dummyDataName} />
    </View>
  );
};

export default HomeScreen;
