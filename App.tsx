/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  text:{
    backgroundColor: "#7159c1",
    color: "white"
  },

  container:{
    flex: 1,
    backgroundColor: "#7159c1",
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default App;
