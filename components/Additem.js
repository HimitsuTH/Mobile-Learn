import React, { useState }from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Additem = ({addItem}) => {
  const [text, setText] = useState('');

  const onChange = textValue => setText(textValue);
    const setItem = () => {
        addItem(text)
        setText('')
    }

  return (
    <View>
      <TextInput
        placeholder="Add Books..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={setItem}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: 'darkgreen',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Additem;
