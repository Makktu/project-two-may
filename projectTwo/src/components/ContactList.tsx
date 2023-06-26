import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contactsData = [
    {
      userId: 1,
      userName: 'John',
      status: "Knows everything. He knows you're reading this.",
      imageUrl:
        'https://images.unsplash.com/photo-1555729053-0e58d2d944a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      userId: 2,
      userName: 'Dee',
      status: 'Somehow still a thing',
      imageUrl:
        'https://images.unsplash.com/photo-1609508179026-0e6e6e4dbe97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      userId: 3,
      userName: 'Vanessa',
      status: 'Liable to explode at any moment',
      imageUrl:
        'https://images.unsplash.com/photo-1670015451934-d294121cac47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFuZXNzYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      userId: 4,
      userName: 'Bernie',
      status: 'If 1970s Wendy Craig was a Switchboard operator',
      imageUrl:
        'https://images.unsplash.com/photo-1555293442-818eb55f7ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80',
    },
    {
      userId: 5,
      userName: 'Rachael',
      status: 'The literal anti-Christ',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/1/17/Rachael_Ray%2C_Red_Dress_Collection_2007.jpg',
    },
  ];
  return (
    <View style={styles.contacts}>
      <Text style={styles.headerText}>ContactList</Text>
      <ScrollView style={styles.scrollContainer} scrollEnabled={false}>
        {contactsData.map(({userId, userName, status, imageUrl}) => (
          <View key={userId} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.imageStyle}
            />
            <View style={{flexShrink: 1}}>
              <Text style={styles.nameText}>{userName}</Text>
              <View>
                <Text style={styles.statusText}>{status}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {},
  userCard: {
    backgroundColor: 'purple',
    marginVertical: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  userStatus: {
    flex: 1,
    flexWrap: 'wrap',
  },
  imageStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 11,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 8,
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
  nameText: {
    fontSize: 22,
    color: 'cyan',
    fontWeight: '600',
  },
  idText: {
    fontSize: 14,
    color: 'pink',
  },
  contacts: {
    marginHorizontal: 16,
  },
  itemStyle: {
    marginVertical: 10,
  },
});
