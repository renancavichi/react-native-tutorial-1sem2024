import {View, StyleSheet, ScrollView, TextInput} from 'react-native'
import Button from '../components/ui/Button'
import { useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import useUserStore from '../stores/userStore.js'
import useUserLoggedStore from '../stores/useUserLoggedStore.js'
import authFetch from '../helpers/authFetch.js'

const Editar = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const removeUserStore = useUserStore(state => state.removeUser)
  const updateUser = useUserStore(state => state.updateUser)
  const token = useUserLoggedStore(state => state.token)

  const {user} = route.params

  const [txtName, setTxtName] = useState(user.name)
  const [txtEmail, setTxtEmail] = useState(user.email)
  const [txtAvatar, setTxtAvatar] = useState(user.avatar)

  const editUser = async () =>{
      try{
        //const result = await authFetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user/'+user.id, {
        const result = await authFetch('http://localhost:3333/user/'+user.id, {
          method: "PUT",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name: txtName, email: txtEmail, avatar: txtAvatar})
        })
        if(!result.ok){
          const dataError = await result.json()
          if(dataError?.error && dataError?.code && dataError.code === "logout"){
            alert('Sessão expirada!')
            navigation.navigate('Login')
            return
          }
        }
        const data = await result.json()
        console.log(data)
        if(data?.success){
          //update do user na store com o data.user
          updateUser(data.user)
          navigation.goBack()
        } else {
          alert(data.error)
        }
      } catch (error){
        console.log('Error edit ' + error.message)
        alert(error.message)
      }
    } 

    const removeUser = async () =>{
      try{
        //const result = await authFetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user/'+user.id, {
        const result = await authFetch('http://localhost:3333/user/'+user.id, {
          method: "DELETE",
          headers:{
            "Content-Type": "application/json"
          }
        })
        if(!result.ok){
          const dataError = await result.json()
          if(dataError?.error && dataError?.code && dataError.code === "logout"){
            alert('Sessão expirada!')
            navigation.navigate('Login')
            return
          }
        }
        const data = await result.json()
        console.log(data)
        if(data?.success){
          removeUserStore(user.id)
          navigation.goBack()
        } else {
          alert(data.error)
        }
      } catch (error){
        console.log('Error removeUser ' + error.message)
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
              placeholder='Avatar...'
              onChangeText={setTxtAvatar}
              value={txtAvatar}
              />
              <Button 
                  title="Editar Usuário"
                  onPress={editUser}
              />

              <Button 
                  title="Remover Usuário"
                  onPress={removeUser}
              />

              <Button 
                  title="Products"
                  onPress={() => navigation.navigate('Products')}
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

export default Editar
