import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {Button, TouchableRipple} from 'react-native-paper';

// import MaterialCommunityIcons from ' react-native-vector-icons';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const HomeIcon = ({navigation}) => {
  return (
    <View style={styles.iconContainer}>
      <LinearGradient
        colors={['#4B6ECA', '#2D55BB', '#0D2C7B']}
        style={styles.img}>
        <View style={styles.iconBtn}>
          <Button
            icon="calendar-month"
            labelStyle={{fontSize: 50, marginLeft: 5}}
            color="white"
            style={styles.icon}></Button>

          <Button
            onPress={() => {
              navigation.navigate('Finger');
            }}
            icon="calendar-month"
            labelStyle={{fontSize: 50, marginLeft: 5}}
            color="white"
            style={styles.icon}></Button>

          <Button
            icon="calendar-month"
            labelStyle={{fontSize: 50, marginLeft: 5}}
            color="white"
            style={styles.icon}></Button>
          <Button
            onPress={() => {
              navigation.navigate('');
            }}
            icon="calendar-month"
            labelStyle={{fontSize: 50, marginLeft: 5}}
            color="white"
            style={styles.icon}></Button>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: width,
    height: height,
  },
  icon: {
    marginLeft: 10,
    marginTop: height / 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 80,
    shadowColor: '#133465',
    backgroundColor: '#244DB7',
    elevation: 5,
  },
  iconContainer: {
    flex: 1,
  },
  iconBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 5,
  },
});
export default HomeIcon;
