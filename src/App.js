// Import
import React, { Component } from 'react';
import { Text, View, StatusBar, Platform } from 'react-native';

// Local Import

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#F8F8F8',
            height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
            }}
        >
          <StatusBar
            translucent
            backgroundColor="#F8F8F8"
            barStyle="dark-content"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text>
            App
          </Text>
        </View>
      </View>
    );
  }
};

export default App;
