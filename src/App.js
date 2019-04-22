import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import { Header } from './components/Common';
import LibraryList from './components/LibraryList';

const App = () => {
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
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    </View>
  );
};

export default App;
