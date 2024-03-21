import {View, Text, StyleSheet} from 'react-native'

const Editar = () => {
  return (
    <View style={styles.container}>
      <Text>Editar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#000"
    }
})

export default Editar
