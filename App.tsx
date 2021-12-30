import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, View } from 'native-base';
import { SafeAreaView, StyleSheet } from 'react-native';
import theme from './theme';
import "./src/config/firebase"
import Exercises from './src/screens/Exercises';

export default function App() {

  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.layout}>
        <Exercises />
      </SafeAreaView>

    </NativeBaseProvider >
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center"
  }
})

