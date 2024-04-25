import { useState } from 'react'
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/ui/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import H1 from '../components/ui/H1.js'

const Cadastrar = () => {
    const navigation = useNavigation()

    const [txtName, setTxtName] = useState('')
    const [txtEmail, setTxtEmail] = useState('')
    const [txtAvatar, setTxtAvatar] = useState('')
    const [txtPass, setTxtPass] = useState('')

    const postUser = async () =>{
        try{
          const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: txtName, email: txtEmail, pass: txtPass, avatar: txtAvatar})
          })
          const data = await result.json()
          console.log(data)
          if(data?.success){
            navigation.goBack()
          } else {
            alert(data.error)
          }
        } catch (error){
          console.log('Error postUser ' + error.message)
          alert(error.message)
        }
      } 

    return (
        <ScrollView>
            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder='Nome...'
                onChangeText={setTxtName}
                value={txtName}
                />
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
                />
                <TextInput 
                style={styles.input}
                placeholder='Avatar...'
                onChangeText={setTxtAvatar}
                value={txtAvatar}
                />
                <Button 
                    title="Cadastrar Usuário"
                    onPress={postUser}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        padding: 40
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

export default Cadastrar
