// import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import ListUser from './screens/ListUser'
import Cadastrar from './screens/Cadastrar'
import Products from './screens/Products.js'
import Editar from './screens/Editar'
import Splash from './screens/Splash.js'
import Login from './screens/Login.js'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
//const Drawer = createDrawerNavigator()

const UserNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Principal" component={ListUser} />
      <Stack.Screen
        name="Editar"
        component={Editar}
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: "#FFF", },
          headerTintColor: "#FFF"
        }} />
    </Stack.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#000' },
      headerTitleStyle: { color: "#FFF" },
      tabBarShowLabel: false
    }}>
      <Tab.Screen
        name="Users"
        component={UserNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name="home" color={{color: "#000"}} size={25} />
          )
        }}
      />
      <Tab.Screen name="Products" component={Products} options={{
        tabBarIcon: () => (
          <Feather name="shopping-cart" size={24} color="black" />
        )
      }}/>
      <Tab.Screen name="Teste" component={Products} options={{
        tabBarIcon: () => (
          <Feather name="user" size={24} color="black" />
        )
      }} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Splash"
        component={Splash} 
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{
            title: "Cadastrar User"
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{
            headerShown: false
          }}
        />
    </Stack.Navigator>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Principal" component={ListUser} />
        <Drawer.Screen name="Cadastrar" component={Cadastrar} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  )
}
