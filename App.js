import React, {useEffect} from 'react';
import {Button, View, Text, Alert, BackHandler} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/HomeScreen';
import {InputOTPScreen} from './src/components/InputOTPScreen';
import {Authentication} from './src/components/Authentication';
import BookAppointment from './src/components/BookAppointment';
import Profile from './src/components/Profile';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  function handleBackButton() {
    BackHandler.exitApp();
    return true;
  }
  return (
    <Tabs.Navigator
      backBehaviour="history"
      screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Appointment" component={BookAppointment} />
    </Tabs.Navigator>
  );
};

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
          name="rootHome"
          component={RootHome}
          options={{title: 'Home', headerShown: false}}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
