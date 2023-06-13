import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import MyText from './MyText';

export default function BasicCard() {
  // *
  const color1 = 'red';
  const color2 = 'green';
  const color3 = 'yellow';
  // *
  return (
    <>
      {/* <ScrollView horizontal={true}> */}
      <View>
        <MyText content="Basic Card" size={28} thisColor="skyblue" />
        <ScrollView horizontal={true}>
          <View style={styles.flatDisplayStyle}>
            <Text style={[styles.cardStyle, {backgroundColor: color1}]}>
              Red
            </Text>
            <Text style={[styles.cardStyle, {backgroundColor: color2}]}>
              Green
            </Text>
            <Text style={[styles.cardStyle, {backgroundColor: color3}]}>
              Yellow
            </Text>
            <Text style={[styles.cardStyle, {backgroundColor: color3}]}>
              Yellow
            </Text>
            <Text style={[styles.cardStyle, {backgroundColor: color3}]}>
              Yellow
            </Text>
            <Text style={[styles.cardStyle, {backgroundColor: color3}]}>
              Yellow
            </Text>
          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: 'white',
  },
  cardStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    height: 100,
    width: 100,
    margin: 5,
    borderRadius: 8,
  },
  flatDisplayStyle: {
    flexDirection: 'row',
    padding: 5,
  },
});
