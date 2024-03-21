// import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListUser from './screens/ListUser'
import Cadastrar from './screens/Cadastrar'
import Editar from './screens/Editar'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={ListUser} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
