import {View, Text, StyleSheet} from 'react-native'

const Body = () => {
  return (
    <View style={styles.body}>
        <Text style={styles.boasvindas}>Bem vindo!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    boasvindas: {
      color: '#FFF',
      fontSize: 25,
    },
    body: {
      flex: 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
)

export default Body