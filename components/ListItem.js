import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            <Icon 
                name='remove' 
                size={20} 
                color='firebrick'
                onPress={()=> deleteItem(item.id)}
            />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listItemText: {
        fontSize: 18,
    },
});

export default ListItem;
