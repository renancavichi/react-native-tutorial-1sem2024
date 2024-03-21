import { useState } from 'react'
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/ui/Button'
import { useNavigation, useRoute } from '@react-navigation/native'

const Cadastrar = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const {users, setUsers} = route.params

    const [txtName, setTxtName] = useState('')
    const [txtEmail, setTxtEmail] = useState('')
    const [txtAvatar, setTxtAvatar] = useState('')

    const postUser = async () =>{
        try{
          const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: txtName, email: txtEmail, avatar: txtAvatar})
          })
          const data = await result.json()
          console.log(data)
          setUsers([data.user, ...users])
          navigation.goBack()
        } catch (error){
          console.log('Error postUser ' + error.message)
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
