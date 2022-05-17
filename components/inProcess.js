import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
/* import { Icon } from 'react-native-vector-icons/Icon'; */
import Icon from 'react-native-vector-icons/FontAwesome';

const InProcess = ({ item, deleteItem, moveItemDown, moveItemUp }) => {
  return (
    item.status == 'INPROCESS' && (
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.text}</Text>

          <View style={styles.icons}>
            <Icon
              name="remove"
              size={20}
              color="firebrick"
              onPress={() => deleteItem(item.id)}
            />
            <Icon
              name="angle-double-up"
              size={20}
              color="blue"
              onPress={() => moveItemUp(item.id)}
            />
            <Icon
              name="angle-double-down"
              size={20}
              color="blue"
              onPress={() => moveItemDown(item.id)}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  );
};
export default InProcess;
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
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
