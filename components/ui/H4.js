import {Text, StyleSheet} from 'react-native'

const H4 = ({children}) => {
  return (
    <Text style={styles.h4}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    h4: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})

export default H4