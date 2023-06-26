import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import BasicCard from './src/components/BasicCard';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCard from './src/components/FancyCard';
import ContactList from './src/components/ContactList';

const App = () => {
  return (
    <View style={{backgroundColor: '#000108', height: '100%'}}>
      <StatusBar backgroundColor={'#000108'} />
      <ScrollView>
        <BasicCard />
        <ElevatedCards />
        <ContactList />

        <FancyCard />
      </ScrollView>
    </View>
  );
};

export default App;
