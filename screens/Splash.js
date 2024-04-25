import {View, Text, StyleSheet, TextInput} from 'react-native'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

  const navigation = useNavigation()
 
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Login')
    }, "2000"); 
  },[])

  return (
    <View style={styles.container}>
      <Text>Carregando...</Text>
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
