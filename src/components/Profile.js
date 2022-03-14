import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileItem from './ProfileItem';

const Profile = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        renderItem={({item}) => {
          return <ProfileItem item={item} />;
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
