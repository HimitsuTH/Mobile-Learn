import {StyleSheet, Text, View} from 'react-native';
import React from 'react';


const header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};




const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkblue',
  },
  text: {
    color: "#fff",
    fontSize: 24,
    textAlign: 'center',
  },
});

export default header;

