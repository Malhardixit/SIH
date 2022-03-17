import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const SlideItem = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{uri: item.url}} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDesc}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 5,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDesc: {
    color: 'white',
    fontSize: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
export default SlideItem;
