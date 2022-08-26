import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React from 'react';
import Header from './Header';
import ChatList from './ChatList';

const Home = props => {
  return (
    <View>
      <Header />
      <ChatList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
