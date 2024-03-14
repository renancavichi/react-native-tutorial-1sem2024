import {View, StyleSheet, FlatList} from 'react-native'
import { useEffect, useState } from 'react'
import H1 from './ui/H1'
import CardUser from './CardUser'

const Body = () => {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try{
      const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user')
      const data = await result.json()
      console.log(data.success)
      setUsers(data.users)
    } catch (error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <View style={styles.body}>
        <H1 style={styles.usuariosH1}>Usuários</H1>
        <View style={styles.listUser}>
            <FlatList
              data={users}
              renderItem={({item}) => <CardUser user={item} />}
              keyExtractor={item => item.id}
              horizontal={true}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
      flex: 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    usuariosH1: {
      marginBottom: 20,
      color: "#FFF"
    },
    listUser:{
      height: 120
    }
  }
)

export default Body