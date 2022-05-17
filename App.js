import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Alert } from 'react-native';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import 'react-native-get-random-values';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import InProcess from './components/inProcess';
import Done from './components/Done';
const { v4: uuidv4 } = require('uuid');
import SectionHeader from './components/SectionHeader';
import Search from './components/Search';
import Empty from './components/Empty';

const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk', status: 'TODO' },
    { id: uuidv4(), text: 'Eggs', status: 'INPROCESS' },
    { id: uuidv4(), text: 'Bread', status: 'DONE' },
    { id: uuidv4(), text: 'Juice', status: 'TODO' },
    { id: uuidv4(), text: 'Cheese', status: 'TODO' },
  ]);
  const [search, setSearch] = useState('');
  const [isEmpty, setIsEmpty] = useState('true');

  /*  const checkIfEmpty = () => {
    if (
      items.some((item) => {
        item.status = 'TODO';
      })
    ) {
      setIsEmpty('false');
    }
  }; */
  useEffect(() => {
    if (
      items.some((item) => {
        item.status = 'TODO';
      })
    ) {
      setIsEmpty('false');
    }
  }, [isEmpty]);

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
        return [{ id: uuidv4(), text, status: 'TODO' }, ...prevItems];
      });
    }
  };
  const moveItemDown = (id) => {
    setItems((items) => {
      items.map((item) => {
        if (item.id == id) {
          if (item.status == 'TODO') {
            item.status = 'INPROCESS';
          } else if (item.status == 'INPROCESS') {
            item.status = 'DONE';
          }
          return item;
        }
      });
      console.log(items);
      return items.filter((item) => item);
    });
    /*  return [...items]; */
    return items;
  };
  const moveItemUp = (id) => {
    setItems((items) => {
      items.map((item) => {
        if (item.id == id) {
          if (item.status == 'INPROCESS') {
            item.status = 'TODO';
          } else if (item.status == 'DONE') {
            item.status = 'INPROCESS';
          }
          return item;
        }
      });
      console.log(items);
      return items.filter((item) => item);
    });
    return items;
  };

  return (
    <View style={styles.container}>
      <Header title="ToDoList" />
      <AddItem addItem={addItem} />
      <Search search={search} setSearch={setSearch} />
      <SectionHeader title="ToDo:" />
      {/*       {isEmpty && <Empty />} */}
      <FlatList
        data={items.filter((item) =>
          item.text.toLocaleLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            deleteItem={deleteItem}
            moveItemDown={moveItemDown}
          />
        )}
      />
      <SectionHeader title="In Process:" />
      <FlatList
        data={items.filter((item) =>
          item.text.toLocaleLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => (
          <InProcess
            item={item}
            deleteItem={deleteItem}
            moveItemDown={moveItemDown}
            moveItemUp={moveItemUp}
          />
        )}
      />
      <SectionHeader title="Done:" />
      <FlatList
        data={items.filter((item) =>
          item.text.toLocaleLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => (
          <Done
            item={item}
            deleteItem={deleteItem}
            moveItemDown={moveItemDown}
            moveItemUp={moveItemUp}
          />
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
  },
});
