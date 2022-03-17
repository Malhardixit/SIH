import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProfileItem from './ProfileItem';

const Profile = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        renderItem={({item}) => {
          return <ProfileItem item={item} />;
        }}
      />
    </View>
  );
};

export default Profile;
