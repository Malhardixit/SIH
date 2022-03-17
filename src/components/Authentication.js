import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import LottieView from 'lottie-react-native';
// import axios from 'axios';

export function Authentication({navigation}) {
  let textInput = useRef(null);
  const [phonenumber, setPhoneNumber] = useState();
  const [focusInput, setFocusInput] = useState(true);

  const onChangePhone = number => {
    setPhoneNumber(number);
  };

  const onPressContinue = () => {
    if (phonenumber.length === 10) {
      navigation.navigate('InputOTP');
      console.log('pressed');
      //fetchOTP();
    }
  };

  const fetchOTP = () => {
    fetch(
      `https://sihpaymentapis.herokuapp.com/generateOTP?phoneNumber=${phonenumber}`,
    )
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onChangeFocus = () => {
    setFocusInput(false);
  };
  const onChangeBlur = () => {};

  useEffect(() => {
    textInput.focus();
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-500}
        behavior={'padding'}
        style={styles.containerAvoiddingView}>
        <View></View>
        <Text style={styles.text}>{'Please input your mobile number'}</Text>
        <View
          style={[
            styles.input,
            {
              borderBottomColor: focusInput ? 'blue' : '#ffffff',
            },
          ]}>
          <View style={styles.openDialogView}>
            <Text style={styles.textColour}>{'+91 |'}</Text>
          </View>

          <TextInput
            ref={input => (textInput = input)}
            style={styles.phoneInputStyle}
            placeholder="9876543210"
            placeholderTextColor="#D3D3D3"
            color="black"
            keyboardType="numeric"
            value={phonenumber}
            maxLength={10}
            onChangeText={onChangePhone}
            secureTextEntry={false}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
            autoFocus={focusInput}
          />
        </View>

        <View style={styles.viewBottom}>
          <TouchableOpacity onPress={onPressContinue}>
            <View
              style={[
                styles.btnContinue,
                {
                  backgroundColor: phonenumber ? '#244db7' : 'gray',
                },
              ]}>
              <Text style={styles.textContinue}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerAvoiddingView: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 16,
    color: 'black',
  },

  textColour: {
    color: 'black',
  },

  input: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  openDialogView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneInputStyle: {
    marginLeft: 5,
    flex: 1,
    height: 50,
  },
  viewBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignItems: 'center',
  },
  btnContinue: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContinue: {color: '#ffffff', alignItems: 'center', marginTop: 5},
  img: {
    height: 50,
    width: 30,
    marginTop: 30,
  },
});
