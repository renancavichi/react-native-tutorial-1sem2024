import {View, Text, StyleSheet, TextInput} from 'react-native'
import Button from '../components/ui/Button.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const Products = () => {
  const [nameUser, setNameUser] = useState('')
  
  const saveAS = async (data, value) => {
    try {
      await AsyncStorage.setItem(data, value)
    } catch (error){
      console.log('Erro ao gravar dado')
    }
  }

  const getAS = async (data) => {
    let dataFound = null
    try {
      dataFound = await AsyncStorage.getItem(data)
    } catch (error){
      console.log('Erro ao ler dado')
    }
    return dataFound
  }

  useEffect(() => {
    const getNome = async () =>{
      const nome = await getAS('nome')
      setNameUser(nome)
    }

    getNome()
  },[])

  return (
    <View style={styles.container}>
      
      <Text>Nome salvo: {nameUser}</Text>

      <Text>Exemplo AsyncStorage</Text>

      <TextInput 
                style={styles.input}
                placeholder='Nome...'
                onChangeText={setNameUser}
                value={nameUser}
                /> 
        <Button title="Cadastrar Nome User" 
        onPress={() => saveAS('nome', nameUser)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
      height: 40,
      width: '100%',
      backgroundColor: '#FFF',
      borderWidth: 1,
      marginBottom: 18,
      padding: 10,
  }
})

export default Products
