import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';

const BookAppointment = ({navigation}) => {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Home');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const toHistory = () => {
    navigation.navigate('History');
  };
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({});
