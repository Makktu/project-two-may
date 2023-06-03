import {Text} from 'react-native';
import React from 'react';

export default function MyText({content, size, thisColor}) {
  return (
    <>
      <Text style={{color: thisColor, fontSize: size, margin: 5}}>
        {content}
      </Text>
    </>
  );
}
