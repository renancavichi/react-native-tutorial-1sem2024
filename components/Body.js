import {View, StyleSheet, FlatList} from 'react-native'
import H1 from './ui/H1'
import CardUser from './CardUser'

const users = [
  {
    id: 1,
    name: "Renan Cavichi",
    email: "renancavichi@gmail.com",
    avatar:"https://avatars.githubusercontent.com/u/4259630?v=4"
  },
  {
    id: 2,
    name: "Maria",
    email: "maria@gmail.com",
    avatar:"https://avatars.githubusercontent.com/u/114303361?v=4"
  },
  {
    id: 3,
    name: "Manuel",
    email: "manuel@gmail.com",
    avatar:"https://avatars.githubusercontent.com/u/4061891?v=4"
  },
  {
    id: 4,
    name: "Camila",
    email: "camila@gmail.com",
    avatar:"https://avatars.githubusercontent.com/u/4061891?v=4"
  },
  {
    id: 5,
    name: "Renan Cavichi",
    email: "renancavichi@gmail.com",
    avatar:"https://avatars.githubusercontent.com/u/4259630?v=4"
  },
  {
    id: 6,
    name: "Maria",
    email: "maria@gmail.com",
    avatar:"https://avatars.githubusercontent.com/u/114303361?v=4"
  },
]

const Body = () => {
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