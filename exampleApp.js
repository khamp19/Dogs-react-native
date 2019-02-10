import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Dogs from './dogs';

export default class ExampleApp extends React.Component {
  render() {
    return (
      <View style={container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          onPress={() => { console.log("pressed button") }}
          title="Press me!"
        />
        <View>
          <Dogs />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 20,
    fontSize: 18,
    textAlign: 'center'
  },
});

const { container, paragraph } = styles;