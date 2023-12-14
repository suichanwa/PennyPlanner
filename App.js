import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
        <Ionicons name={isMenuOpen ? 'close' : 'menu'} size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>

      {isMenuOpen && (
        <View style={styles.menuContent}>
          <Text>Menu Item 1</Text>
          <Text>Menu Item 2</Text>
          <Text>Menu Item 3</Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContent: {
    position: 'absolute',
    top: 70,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    zIndex: 2,
  },
});
