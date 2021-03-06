import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Button,
} from 'react-native';
import Header from './Header';
import React, { useEffect, useState } from 'react';
import 'react-native-get-random-values';
import ListItem from './ListItem';
import AddItem from './AddItem';
import InProcess from './inProcess';
import Done from './Done';
import SectionHeader from './SectionHeader';

const ToDo = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  function fetchData() {
    fetch('http://localhost:5000/tasks/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) =>
        console.error(error)
      ) /* Base64 react native should be installed och import */
      .finally(() => setLoading(false));
  }
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Task:</Text>

        <Text style={styles.headerText}>Status:</Text>
      </View>
      <FlatList
        data={data.filter((item) => item.status == 'TODO')}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
              <Text style={styles.listItemText}>{item.title}</Text>
              <Button
                title={item.status}
                onPress={() => navigation.navigate('Home', {})}
              />
            </View>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#D3D3D3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerText: {
    fontSize: 25,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    width: '80%',
    fontSize: 18,
  },
});
