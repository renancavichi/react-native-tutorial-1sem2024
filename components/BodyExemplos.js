import {View, StyleSheet, FlatList, Text, TextInput} from 'react-native'
import Button from './ui/Button'
import { useEffect, useState } from 'react'
import H1 from './ui/H1'
import CardUser from './CardUser'
import CardProduct from './CardProduct'

const BodyExemplos = () => {

  const [txtName, setTxtName] = useState('')
  const [txtEmail, setTxtEmail] = useState('')
  const [txtAvatar, setTxtAvatar] = useState('')

  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [counter, setCounter] = useState(0)

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

  const getProducts = async () => {
    try{
      const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/product?2')
      const data = await result.json()
      console.log(data.success)
      setProducts(data.products)
    } catch (error){
      console.log('Error getProducs ' + error.message)
    }
  }

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
      getUsers()
    } catch (error){
      console.log('Error postUser ' + error.message)
    }
  } 

  useEffect(()=>{
    getUsers()
    getProducts()
  },[])

  return (
    <View style={styles.body}>
        <TextInput 
          style={styles.input}
          onChangeText={setTxtName}
          value={txtName}
        />
        <TextInput 
          style={styles.input}
          onChangeText={setTxtEmail}
          value={txtEmail}
        />
        <TextInput 
          style={styles.input}
          onChangeText={setTxtAvatar}
          value={txtAvatar}
        />
        <Button 
          title="Cadastrar Usuário"
          onPress={postUser}
        />


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
      height: 120,
      width: '100%'
    },
    input: {
      height: 40,
      width: 300,
      backgroundColor: '#FFF',
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  }
)

export default BodyExemplos