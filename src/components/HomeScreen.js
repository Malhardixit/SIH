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
import Profile from './Profile';
import {useBackHandler} from '@react-native-community/hooks';

const {height, width} = Dimensions.get('window');

const HomeScreen = () => {
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
    <View>
      <SlideShow data={dummyData} />
      <Profile data={dummyData} />
      {/* <TouchableOpacity onPress={openSite}>
        <View style={styles.sitebtn}>
          <Text style={styles.textView}>Pay</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sitebtn: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  // cardView: {
  //   // flex: 1,
  //   width: width - 20,
  //   height: height / 4,
  //   backgroundColor: 'white',
  //   margin: 10,
  //   borderRadius: 10,
  //   shadowColor: '#000',
  //   shadowOffset: {width: 0.5, height: 0.5},
  //   shadowOpacity: 0.5,
  //   shadowRadius: 3,
  //   elevation: 5,
  // },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
});
