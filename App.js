import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Alert } from 'react-native';
import Header from './components/Header';
import React, { useState } from 'react';
import 'react-native-get-random-values';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { uuid } from 'uuidv4';
const { v4: uuidv4 } = require('uuid');

const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },
    { id: uuidv4(), text: 'Eggs' },
    { id: uuidv4(), text: 'Bread' },
    { id: uuidv4(), text: 'Juice' },
  ]);
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };
  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Enter an item', [{ text: 'OK' }]);
    } else {
      setItems((prevItems) => {
        return [{ id: uuidv4(), text }, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="ToDoList" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: 'yellow',
    /*     alignItems: 'center',
    justifyContent: 'center', */
  },
});
