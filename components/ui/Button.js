import { TouchableHighlight, View, Text, StyleSheet } from "react-native"

const Button = ({title, onPress}) => {
  return (
    <TouchableHighlight style={styles.tHButton} onPress={onPress}>
        <View style={styles.customButton}>
            <Text style={styles.textButton}>{title}</Text>
        </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: "#345944",
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 28,
      },
      tHButton: {
        borderRadius: 20,
        marginVertical: 8
      },
      textButton: {
        color: '#FFF',
        textAlign: 'center'
      }
})

export default Button
