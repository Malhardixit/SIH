import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

const ProfileItem = ({item}) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.cardView}>
          <Text style={styles.textView}>{item.title}</Text>
          <Text style={styles.textView}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  cardView: {
    // flex: 1,
    marginTop: 190,
    width: width - 20,
    height: height / 4,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
  },
  textView: {
    color: 'black',
    bottom: 10,
    margin: 10,
    left: 5,
  },
});
