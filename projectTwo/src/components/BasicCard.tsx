import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import MyText from './MyText';

export default function BasicCard() {
  // *
  const color1 = 'red';
  const color2 = 'green';
  const color3 = 'yellow';
  // *
  return (
    <View>
      <MyText content="Basic Card" size={28} thisColor="whitesmoke" />
      <View style={styles.flatDisplayStyle}>
        <Text style={[styles.cardStyle, {backgroundColor: color1}]}>Red</Text>
        <Text style={[styles.cardStyle, {backgroundColor: color2}]}>Green</Text>
        <Text style={[styles.cardStyle, {backgroundColor: color3}]}>
          Yellow
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    marginVertical: 5,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: 'white',
  },
  cardStyle: {
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    height: 100,
    width: 100,
    marginLeft: 10,
    borderRadius: 8,
  },
  flatDisplayStyle: {
    flexDirection: 'row',
  },
});
