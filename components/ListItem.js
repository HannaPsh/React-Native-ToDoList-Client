import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
/* import { Icon } from 'react-native-vector-icons/Icon'; */
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
        {/* <Icon name="rocket" size={20} color="#900" /> */}
      </View>
    </TouchableOpacity>
  );
};
export default ListItem;
const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});
