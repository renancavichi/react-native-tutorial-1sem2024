import {View, StyleSheet, FlatList, Text} from 'react-native'
import Button from './ui/Button'
import { useEffect, useState } from 'react'
import H1 from './ui/H1'
import CardUser from './CardUser'
import CardProduct from './CardProduct'

const Body = () => {

  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [counter, setCounter] = useState(0)


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

  const getProducts = async () => {
    try{
      const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/product')
      const data = await result.json()
      console.log(data.success)
      setProducts(data.products)
    } catch (error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getUsers()
    getProducts()
  },[])

  return (
    <View style={styles.body}>

        <Button 
          title="Add +2"
          onPress={() => setCounter(counter + 2)}
        />
        <Button 
          title='Add +1'
          onPress={() => setCounter(counter + 1)}
        />
        <Text style={{color: '#FFF'}}>Valor: {counter}</Text>

        <H1 style={styles.usuariosH1}>Usuários</H1>
        <View style={styles.listUser}>
            {users.length ? 
              <FlatList
                data={users}
                renderItem={({item}) => <CardUser user={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
              /> : 
              <Text style={{color: '#FFF'}}>Loading...</Text>}
        </View>
        {
          products.length ? 
          <FlatList
            data={products}
            renderItem={({item}) => <CardProduct product={item} />}
            keyExtractor={item => item.id}
          />
          :
          <Text style={{color: '#FFF'}}>Loading...</Text>
        }
        
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