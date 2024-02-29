import {Text, StyleSheet} from 'react-native'

const H1 = ({style, children}) => {
  return (
    <Text style={[styles.h1, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default H1