import {StyleSheet, Text, View, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import SlideShow from './SlideShow';
import {dummyData} from '../assets/consts/Data';

const HomeScreen = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  });
  return (
    <View>
      <SlideShow data={dummyData} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
