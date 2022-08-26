import React from 'react';
import {FlatList} from 'react-native';
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
  {
    id: 4,
    firstName: 'Yıldırım',
    lastName: 'Koç',
    messages: [
      {
        text: 'Okey.',
      },
      {
        text: 'Anladım.',
      },
      {
        text: 'Görüşürüz.',
      },
    ],
  },
  {
    id: 5,
    firstName: 'Metin',
    lastName: 'Yıldırım',
    messages: [
      {
        text: 'Yarın orada olalım.',
      },
      {
        text: 'Tamam mıdır?',
      },
    ],
  },
  {
    id: 6,
    firstName: 'Metin',
    lastName: 'Yıldırım',
    messages: [
      {
        text: 'Selam söyle.',
      },
      {
        text: 'Görüşürüz.',
      },
    ],
  },
];

const ChatList = ({navigation}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Chat navigation={navigation} item={item} />}
      keyExtractor={item => item.id}
      // extraData={selectedId}
    />
  );
};

export default ChatList;
