import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import BasicCard from './src/components/BasicCard';

const App = () => {
  return (
    <View style={{backgroundColor: '#000108', height: '100%'}}>
      <StatusBar backgroundColor={'#000108'} />
      <ScrollView>
        <BasicCard />
      </ScrollView>
    </View>
  );
};

export default App;
