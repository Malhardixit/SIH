import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

const ProfileItem = ({item}) => {
  return (
    <View>
      <View>
        <View style={styles.cardView}>
          <Text style={styles.textView}>Name:{item.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  cardView: {
    // flex: 1,
    width: width,
    height: height / 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
  textView: {
    color: 'black',
    top: 10,
    bottom: 10,
    margin: 10,
    left: 0,
    fontFamily: 'sans',
  },
});
