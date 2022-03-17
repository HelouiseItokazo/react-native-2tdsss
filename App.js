/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
    return (
      <View style={styles.container}>
        <Text>Teste</Text>
        <StatusBar style="auto"/>

        <View style={styles.card}>
          <Text>Este é o primeiro card</Text>
        </View>

        <View style={[styles.card, {backgroundColor: '#ee125a',}]}>
          <Text>Este é o segundo card</Text>
        </View>

        <View style={[styles.card, {backgroundColor: '#91a2ad',}]}>
          <Text>Este é o terceiro card</Text>
        </View>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#ccc',
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
  }
});

export default App;
