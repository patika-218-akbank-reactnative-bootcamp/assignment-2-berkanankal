import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import Chat from './Chat';

const data = [
  {
    id: '1',
    firstName: 'Emre',
    lastName: 'Koç',
    messages: [
      {
        text: 'Projeler nasıl gidiyor?',
      },
      {
        text: 'Nasılsın?',
      },
    ],
  },
  {
    id: 2,
    firstName: 'Dilara',
    lastName: 'Yılmaz',
    messages: [
      {
        text: 'Bunları inceleyebilir misin?',
      },
      {
        text: 'Mehmeti gördün mü?',
      },
    ],
  },
  {
    id: 3,
    firstName: 'Metin',
    lastName: 'Yıldırım',
    messages: [
      {
        text: 'Tamamdır.',
      },
      {
        text: 'Hadi gidelim.',
      },
      {
        text: 'Beni evden al.',
      },
    ],
  },
];

const ChatList = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Chat item={item} />}
        keyExtractor={item => item.id}
        // extraData={selectedId}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
