import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import { uuid } from 'uuidv4';

const App = () => {

  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'}
    {id: uuid(), text: 'Egg'}
    {id: uuid(), text: 'Bread'}
    {id: uuid(), text: 'Juice'}
  ]);

  return(
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60,
  },
})

export default App