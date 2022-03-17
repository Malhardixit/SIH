import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

export function InputOTPScreen({navigation}) {
  let textInput = useRef(null);
  let clockCall = null;
  const lengthInput = 6;
  const defaultCountdown = 30;
  const [internalVal, setInternalVal] = useState('');
  const [countDown, setCountDown] = useState(defaultCountdown);
  const [enableResend, setEnableResend] = useState(false);

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

  const verifyOtp = () => {
    // fetch(`https://sihpaymentapis.herokuapp.com/verifyOTP?code=${internalVal}`)
    navigation.navigate('Home');
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     if (data.Message == 'Verified') {
    //       navigation.navigate('Home');
    //       console.log('pressed');
    //     } else {
    //       Alert.alert('Invalid OTP');
    //       navigation.navigate('Authentication');
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  const decrementClock = () => {
    if (countDown === 0) {
      setEnableResend(true);
      setCountDown(0);
      clearInterval(clockCall);
    } else {
      setCountDown(countDown - 1);
    }
  };

  const onChangeText = val => {
    setInternalVal(val);
  };

  const onChangeOTP = () => {
    if (enableResend) {
      setCountDown(defaultCountdown);
      setEnableResend(false);
      clearInterval(clockCall);
      clockCall = setInterval(() => {
        decrementClock(0);
      }, 1000);
      navigation.navigate('Authentication');
    }
  };

  const onChangeNumber = () => {
    navigation.navigate('Authentication');
  };

  useEffect(() => {
    textInput.focus();
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-500}
        behavior={'padding'}
        style={styles.containerAvoiddingView}>
        <Text style={styles.titleStyle}>
          {'Input your OTP code sent via SMS'}
        </Text>

        <View>
          <TextInput
            ref={input => (textInput = input)}
            onChangeText={onChangeText}
            style={{width: 0, height: 0}}
            value={internalVal}
            maxlength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
          />
          <View style={styles.containerInput}>
            {Array(lengthInput)
              .fill()
              .map((data, index) => (
                <View
                  key={index}
                  style={[
                    styles.cellView,
                    {
                      borderBottomColor:
                        index === internalVal.length ? '#244db7' : 'black',
                    },
                  ]}>
                  <Text
                    style={styles.cellText}
                    onPress={() => textInput.focus()}>
                    {internalVal && internalVal.length >= 0
                      ? internalVal[index]
                      : ''}
                  </Text>
                </View>
              ))}
          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={onChangeNumber}>
            <View style={styles.bottomChange}>
              <Text style={styles.textChange}>Change Number</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onChangeOTP}>
            <View style={styles.bottomResend}>
              <Text
                style={[
                  styles.textResend,
                  {
                    color: enableResend ? 'blue' : 'gray',
                  },
                ]}>
                ResendOTP ({countDown})
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={verifyOtp}>
          <View style={styles.verify}>
            <Text style={styles.textVerify}>Verify</Text>
          </View>
        </TouchableOpacity>
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
  titleStyle: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 16,
    color: 'black',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  cellText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
  bottomView: {
    flexDirection: 'row',
    flex: 1,
    //justifyContent: 'center',
    marginBottom: 50,
    alignItems: 'flex-end',
  },
  bottomChange: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textChange: {
    color: '#244db7',
    alignItems: 'center',
    fontSize: 15,
    marginTop: 30,
  },
  bottomResend: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textResend: {
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  verify: {
    backgroundColor: '#244db7',
    width: 150,
    height: 50,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textVerify: {
    color: 'white',
  },
});
