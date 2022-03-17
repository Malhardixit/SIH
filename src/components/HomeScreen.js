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
      <View style={styles.textProp}>
        <Text
          style={{
            textAlign: 'center',
            width: 94,
            height: 42,
            left: 5,
            top: 5,
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: 14,
          }}>
          Book Appointment
        </Text>
        <Text
          style={{
            textAlign: 'center',
            width: 94,
            height: 42,
            left: 10,
            top: 5,
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: 14,
          }}>
          Make Payment
        </Text>
        <Text
          style={{
            textAlign: 'center',
            width: 94,
            height: 42,
            left: 20,
            top: 5,
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: 14,
          }}>
          Upcoming Appointment
        </Text>
        <Text
          style={{
            textAlign: 'center',
            width: 94,
            height: 42,
            left: 20,
            top: 5,
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: 14,
          }}>
          Transaction History
        </Text>
      </View>
      <Profile data={dummyDataName} />
    </View>
  );
};

const styles = StyleSheet.create({
  textProp: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default HomeScreen;
