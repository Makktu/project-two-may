import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MyText from './MyText';

export default function FancyCard() {
  return (
    <View>
      <MyText content="Stock Phrases ➡️" size={28} thisColor="skyblue" />
      <View style={[styles.flatDisplayStyle, styles.cardElevated]}></View>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1674301927403-870c370ef75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGZhY3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardBody}>
        <MyText content="Factory" size={22} thisColor="orangered" />
        <MyText content="Coventry, England" size={14} thisColor="yellow" />
        <View style={{width: 275}}>
          <MyText
            content="Some type of factory in some type of place. One imagines things here to be grim."
            size={14}
            thisColor="orangered"
          />
        </View>
        <Text style={styles.cardFooter}>Tap Image to play video</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: 'slategray',
  },
  cardStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    height: 100,
    width: 100,
    margin: 5,
    borderRadius: 8,
    backgroundColor: 'whitesmoke',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'yellow',
  },
  flatDisplayStyle: {
    flexDirection: 'row',
    padding: 5,
  },
  iconStyle: {
    fontSize: 64,
  },
  cardElevated: {},
  cardImage: {
    height: 160,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  cardBody: {
    marginHorizontal: 5,
  },
  cardFooter: {
    color: 'yellowgreen',
    fontSize: 10,
    margin: 5,
  },
});
