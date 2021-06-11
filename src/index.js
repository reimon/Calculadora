import React from 'react';

import {Text, View} from 'react-native';

export default function Index() {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Calculadora Elisa</Text>
    </View>
  );
}
