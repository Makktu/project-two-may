import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyText from './MyText';

const ElevatedCards = () => {
  return (
    <>
      <MyText content="Elevated Card" size={28} thisColor="skyblue" />
      <ScrollView horizontal={true}>
        <View style={styles.flatDisplayStyle}>
          <Text style={[styles.textStyle, styles.cardStyle]}>More Cards</Text>
          <Text style={[styles.textStyle, styles.cardStyle]}>Here</Text>
          <Text style={[styles.textStyle, styles.cardStyle]}>Tap</Text>
          <Text style={[styles.textStyle, styles.cardStyle]}>More...</Text>
          <Text style={[styles.textStyle, styles.cardStyle]}>Scroll</Text>
          <Text style={[styles.textStyle, styles.cardStyle, styles.iconStyle]}>
            🔴
          </Text>
          <Text style={[styles.textStyle, styles.cardStyle, styles.iconStyle]}>
            🟢
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

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
});

export default ElevatedCards;
