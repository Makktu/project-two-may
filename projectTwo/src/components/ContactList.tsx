import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contactsData = [
    {
      userId: 1,
      userName: 'John',
      status: 'Knows everything, of course.',
      imageUrl: '',
    },
    {
      userId: 2,
      userName: 'Dee',
      status: 'Somehow still a thing',
      imageUrl: '',
    },
    {
      userId: 3,
      userName: 'Vanessa',
      status: 'Liable to explode at any moment',
      imageUrl: '',
    },
    {
      userId: 4,
      userName: 'Bernie',
      status: 'If 1970s Wendy Craig was a Switchboard operator',
      imageUrl: '',
    },
    {
      userId: 5,
      userName: 'Rachael',
      status: 'The literal anti-Christ',
      imageUrl: '',
    },
  ];
  return (
    <View style={styles.contacts}>
      <Text style={styles.headerText}>ContactList</Text>
      <FlatList
        data={contactsData}
        renderItem={({item}) => (
          <View style={styles.itemStyle}>
            <Text style={styles.idText}>User ID: {item.userId}</Text>
            <Text style={styles.innerText}>{item.userName}</Text>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    color: 'yellow',
  },
  innerText: {
    fontSize: 22,
    color: 'green',
  },
  statusText: {
    fontSize: 18,
    color: 'white',
  },
  idText: {
    fontSize: 14,
    color: 'white',
  },
  contacts: {
    marginHorizontal: 10,
  },
  itemStyle: {
    marginVertical: 10,
  },
});
