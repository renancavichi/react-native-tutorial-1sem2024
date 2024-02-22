import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'

const Footer = () => {
  return (
    <View style={styles.footer}>
			<Text style={styles.boasvindas}>Copyright 2024</Text>
			<Image
				style={styles.githubIcon} 
				source={require('../assets/images/github-logo.png')}
			/>
  	</View>
  )
}

const styles = StyleSheet.create({
  boasvindas: {
    color: '#FFF',
    fontSize: 25,
  },
  footer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  githubIcon: {
    width: 40,
    height: 40
  }
});


export default Footer