import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {useBackHandler} from '@react-native-community/hooks';

const BookAppointment = ({navigation: {goBack}}) => {
  useBackHandler(
    useCallback(() => {
      Alert.alert('Are you sure you want to exit the app?', [
        {
          text: 'No',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            goBack();
          },
        },
      ]);
    }, [goBack]),
  );
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({});
