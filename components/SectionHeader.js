import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    height: 30,
    padding: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default SectionHeader;
