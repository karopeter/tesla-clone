import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/carItem';

export default function App() {
  return (
    <View style={styles.container}>
       <CarItem name={"Model 3"} tagline={"Order Online for"} taglineCTA={"Touchless Delivery"} image={require('./assets/images/model-3.jpg')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
