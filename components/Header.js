import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'ToDoList' /* default value in case the props is not given */,
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'purple',
    height: 60,
    padding: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
