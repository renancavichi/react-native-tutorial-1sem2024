import {View, Text, StyleSheet, TextInput} from 'react-native'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useUserLoggedStore from '../stores/useUserLoggedStore.js'

const Splash = () => {

  const navigation = useNavigation()
  const login = useUserLoggedStore(state => state.login)
 
  useEffect(() => {
    const checkUserLogged = async () => {
      try {
        dataFound = await AsyncStorage.getItem('userLogged')
        if(dataFound){
          const data = JSON.parse(dataFound)
          const { token } = data
          const user = data
          delete user.token
          login(user, token)
          setTimeout(() => {
            navigation.navigate('Main')
          }, 2000)
        } else {
          setTimeout(() => {
            navigation.navigate('Login')
          }, 2000)
        }
      } catch (error){
        console.log('Erro ao ler dado')
      }
    } 
    checkUserLogged()
  },[])

  return (
    <View style={styles.container}>
      <Text>Splash - Carregando...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Splash
