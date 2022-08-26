import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Home = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
