import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';

const Chat = ({navigation, item}) => {
  return (
    <TouchableOpacity
      style={styles.chat}
      onPress={() => navigation.navigate('Messages', item)}>
      <View style={styles.chatImage}>
        <Image />
      </View>
      <View style={styles.chatTextContainer}>
        <Text style={styles.textHeader}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.textBody}>{item.messages[0].text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chat: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 20,
  },
  chatImage: {
    width: 70,
    height: 70,
    backgroundColor: 'blue',
    borderRadius: 70,
  },
  chatTextContainer: {
    flexDirection: 'column',
    padding: 10,
    paddingLeft: 15,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
