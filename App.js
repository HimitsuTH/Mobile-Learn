import React , { useState } from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem'
import Additem from './components/Additem'
import uuid from 'uuid-random'

const App = () => {

  const [items, setItems] = useState([
    {id: uuid(), text: 'HTML'},
    {id: uuid(), text: 'CSS'},
    {id: uuid(), text: 'JS'},
    {id: uuid(), text: 'PHP'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if(!text) {
       Alert.alert('Error', 'Please Enter data', [{text: 'OK'},]);
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
    
    
  }

  return (
    <View style={styles.container}>
      <Header title="My Books List" />
      <Additem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;

