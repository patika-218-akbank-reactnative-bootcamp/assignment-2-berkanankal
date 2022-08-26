import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Message from './Message';
import Mic from 'react-native-vector-icons/FontAwesome';

const Messages = props => {
  const data = props.route.params;

  useEffect(() => {
    props.navigation.setOptions({title: data.firstName});
  }, [props.navigation, data.firstName]);

  return (
    <>
      <View style={styles.messages}>
        {data.messages.map((message, i) => (
          <Message message={message} key={i} />
        ))}
      </View>

      <View style={styles.messagesFooter}>
        <View style={styles.footerInput}>
          <Text>Type..</Text>
        </View>
        <Mic style={styles.mic} name="microphone" size={30} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  messages: {
    flex: 10,
  },
  footerInput: {
    padding: 3,
    flex: 10,
    marginRight: 10,
    width: 150,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
  },
  mic: {
    flex: 1,
  },
  messagesFooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderTopWidth: 1,
  },
});

export default Messages;
