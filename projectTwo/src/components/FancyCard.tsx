import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyText from './MyText';

export default function FancyCard() {
  return (
    <View>
      <MyText content="Stock Phrases ➡️" size={28} thisColor="skyblue" />
      <View style={[styles.flatDisplayStyle, styles.cardElevated]}></View>
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
});
