import {View} from 'react-native';
import React from 'react';
import Header from './Header';
import ChatList from './ChatList';

const Home = ({navigation}) => {
  return (
    <View>
      <Header />
      <ChatList navigation={navigation} />
    </View>
  );
};

export default Home;
