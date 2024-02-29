import {View, StyleSheet} from 'react-native'
import H1 from './ui/H1'
import CardUser from './CardUser'

const Body = () => {
  return (
    <View style={styles.body}>
        <H1 style={styles.usuariosH1}>Usuários</H1>
        <CardUser
          avatar="https://avatars.githubusercontent.com/u/4259630?v=4"
          name="Renan Cavichi"
          email="renancavichi@gmail.com"
        />
        <CardUser
          avatar="https://avatars.githubusercontent.com/u/114303361?v=4"
          name="Maria"
          email="maria@gmail.com"
        />
        <CardUser
          avatar="https://avatars.githubusercontent.com/u/4061891?v=4"
          name="Manuel"
          email="manuel@gmail.com"
        />
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
    }
  }
)

export default Body