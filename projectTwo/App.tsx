import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './src/components/FlatCards';

const App = () => {
  return (
    <View style={{backgroundColor: '#000108', height: '100%'}}>
      <StatusBar backgroundColor={'#000108'} />
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </View>
  );
};

export default App;
