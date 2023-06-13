import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'yellow',
  },
});
