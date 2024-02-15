import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}></View>
        <Text style={styles.boasvindas}>Renan Cavichi</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boasvindas}>Bem vindo!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.boasvindas}>Copyright 2024</Text>
      </View> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boasvindas: {
    color: '#FFF',
    fontSize: 25,
  },
  header:{
    flex: 1,
    backgroundColor: '#564655',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  body: {
    flex: 3,
    backgroundColor: '#765765',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#985678',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: '50%',
    marginHorizontal: 10
  }
})
