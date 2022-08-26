import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dot from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <Image style={styles.wpImage} source={require('../assets/wp.png')} />
        <View style={styles.headerTopIcons}>
          <Icon style={styles.searchIcon} name="search" size={20} />
          <Dot name="dots-three-vertical" size={20} />
        </View>
      </View>
      <View style={styles.headerBottom}>
        <Text style={styles.headerBottomTexts}>Sohbetler</Text>
        <Text style={styles.headerBottomTexts}>Durum</Text>
        <Text style={styles.headerBottomTexts}>Aramalar</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 10,
  },
  headerBottomTexts: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTopIcons: {
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  wpImage: {
    width: 150,
    height: 40,
    margin: 10,
  },
});
