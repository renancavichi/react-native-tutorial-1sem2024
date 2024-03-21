import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ImageBackground, ScrollView} from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'

const ListUser = () => {
  return (
    <ScrollView>
      <ImageBackground 
        resizeMode="cover"
        source={require('../assets/images/bg-mobile.jpg')}
        style={styles.bg}
      >
        <Header />
        <Body />
        <Footer />
      </ImageBackground>
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  bg: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  }
});

export default ListUser