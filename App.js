import React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import {InputOTPScreen} from './src/components/InputOTPScreen';
import {Authentication} from './src/components/Authentication';
import BookAppointment from './src/components/BookAppointment';

const Stack = createNativeStackNavigator();

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
