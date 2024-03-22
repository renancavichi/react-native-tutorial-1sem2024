import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ImageBackground, ScrollView} from 'react-native'
import Body from '../components/Body'

const ListUser = () => {
  return (
    <View>
      <ImageBackground 
        resizeMode="cover"
        source={require('../assets/images/bg-mobile.jpg')}
        style={styles.bg}
      >
        <Body />
      </ImageBackground>
      <StatusBar style="light" />
    </View>
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