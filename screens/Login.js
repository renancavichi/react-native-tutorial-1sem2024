import {View, Text, StyleSheet, TextInput} from 'react-native'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/ui/Button'
import { useNavigation } from '@react-navigation/native'
import H1 from '../components/ui/H1.js'
import { useState } from 'react'

const Login = () => {

  const [txtEmail, setTxtEmail] = useState('')
  const [txtPass, setTxtPass] = useState('')
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <H1>Entrar</H1>

      <TextInput 
        style={styles.input}
        placeholder='Email...'
        onChangeText={setTxtEmail}
        value={txtEmail}
        />
      <TextInput 
        style={styles.input}
        placeholder='Senha...'
        onChangeText={setTxtPass}
        value={txtPass}
        secureTextEntry={true}
      />

      <Button 
        title="Login"
        onPress={()=>{}}
      />
      <Button 
        title="Cadastrar"
        onPress={() => navigation.navigate('Cadastrar')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
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

export default Login
