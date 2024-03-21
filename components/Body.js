import {View, StyleSheet, FlatList, Text} from 'react-native'
import { useEffect, useState } from 'react'
import H1 from './ui/H1'
import CardUser from './CardUser'
import Button from './ui/Button'
import { useNavigation } from '@react-navigation/native'

const Body = () => {
  const [users, setUsers] = useState([])
  const navigation = useNavigation()

  const getUsers = async () => {
    try{
      const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user?34')
      const data = await result.json()
      console.log(data.success)
      setUsers(data.users)
    } catch (error){
      console.log('Error getUsers ' + error.message)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <View>
        <View style={styles.titleAdd}>
          <H1 style={styles.usuariosH1}>Users</H1>
          <Button title="Add User" onPress={() => navigation.navigate('Cadastrar', {users, setUsers})} />
        </View>
        
        <View style={styles.listUser}>
            {users.length ? 
              <FlatList
                data={users}
                renderItem={({item}) => <CardUser user={item} />}
                keyExtractor={item => item.id}
              /> : 
              <Text style={{color: '#FFF'}}>Loading...</Text>}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    usuariosH1: {
      marginBottom: 20,
      color: "#FFF",
    },
    listUser:{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      marginBottom: 20
    },
    titleAdd:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    }
  }
)

export default Body