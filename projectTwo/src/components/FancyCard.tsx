import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import MyText from './MyText';

export default function FancyCard() {
  console.log('????');
  const [pressColor, setPressColor] = useState('yellow');
  return (
    <View>
      <View style={styles.imageHeader}>
        <MyText content="Stock Phrases" size={28} thisColor="skyblue" />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 'auto',
            marginHorizontal: 3,
            textAlignVertical: 'center',
          }}>
          swipe ➡️
        </Text>
      </View>

      <View style={[styles.flatDisplayStyle, styles.cardElevated]}>
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
      <Pressable
        onPressIn={() => setPressColor('green')}
        onPressOut={() => setPressColor('yellow')}>
        <MyText content="PRESS!" size={28} thisColor={pressColor} />
      </Pressable>
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
  cardElevated: {
    backgroundColor: 'slategray',
    marginHorizontal: 20,
    width: 350,
    height: 350,
  },
  cardImage: {
    height: 80,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  cardBody: {},
  cardFooter: {
    color: 'yellowgreen',
    fontSize: 10,
    margin: 5,
  },
  imageHeader: {
    flexDirection: 'row',
  },
});
