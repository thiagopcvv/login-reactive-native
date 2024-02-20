import { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Button, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import styled from 'styled-components/native';
import Example from './Example';
import { useApp } from './useApp';
const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: #BF4F74;
`

const App = () => {
  const { handleOnpress, value } = useApp()
  const [valueInput, setValueInput] = useState('input')

  const handleInput = (newValue: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValueInput(newValue.nativeEvent.text);
  }

  const list: string[] = [
    'item1', 'item2', 'item3', 'item4', 'item5'
  ]

  return (
    <StyledView>
        <Example text="Joao">Children</Example>
        <Example text="Thiago">Children</Example>
        <Example text="Maria">Children</Example>
        <StyledText>Teste</StyledText>
        <Button title={value} onPress={handleOnpress}></Button>
        <TextInput style={styles.input} value={valueInput} onChange={handleInput}></TextInput>
        <FlatList style={styles.list} data={list} renderItem={({ item }) => <Text style={styles.items}>{item}</Text>}/>
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.touchableText}>touchable</Text>
        </TouchableOpacity>
    </StyledView>
  )
}

const styles = StyleSheet.create({
  container: {
    color: 'blue'
  },
  input: {
    backgroundColor: '#000000ac',
    color: '#fff'
  },
  list: {
    backgroundColor: '#61b983',
  },
  items: {
    color: '#fff',
    fontSize: 22
  },
  touchable: {
    height: 100,
    backgroundColor: "#d92d36",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 25
  },
  touchableText: {
    color: '#fff'
  }
})


export default App;