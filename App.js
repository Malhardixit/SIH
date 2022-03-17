import React, {useEffect} from 'react';
import {View, Text, Alert, logoutlogout, Image, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import HomeScreen from './src/components/HomeScreen';
import {InputOTPScreen} from './src/components/InputOTPScreen';
import {Authentication} from './src/components/Authentication';
import BookAppointment from './src/components/BookAppointment';
import Fingerprint from './src/screens/Fingerprint';
import PaymentScreen from './src/screens/PaymentScreen';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{width: 150, height: 50}}
      source={require('./src/assets/consts/AEPS.jpeg')}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen
          name="Authentication"
          component={Authentication}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerTitle: props => <LogoTitle {...props} />,
            headerBackVisible: false,
            headerRight: () => (
              <Button
                icon="logout"
                onPress={() => {
                  Alert.alert('Are you sure you want to logout?');
                  navigation.navigate('Authentication');
                }}
                labelStyle={{fontSize: 30}}
                color="black"
              />
            ),
          })}
        />
        <Stack.Screen
          name="InputOTP"
          component={InputOTPScreen}
          options={{title: 'Input OTP', headerShown: false}}
        />
        <Stack.Screen
          name="Book"
          component={BookAppointment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Finger"
          component={Fingerprint}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pay"
          component={PaymentScreen}
          options={{title: 'Payment', headerTintColor: 'blue'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
