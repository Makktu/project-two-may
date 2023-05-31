import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headerText}>FlatCards</Text>
      <View style={styles.flatDisplayStyle}>
        <Text style={[styles.cardStyle, {backgroundColor: 'red'}]}>Red</Text>
        <Text style={[styles.cardStyle, {backgroundColor: 'green'}]}>
          Green
        </Text>
        <Text style={[styles.cardStyle, {backgroundColor: 'yellow'}]}>
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
