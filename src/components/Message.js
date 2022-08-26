import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Message = ({message}) => {
  return (
    <View style={styles.message}>
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  message: {
    width: 230,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 20,
  },
  messageText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
});
