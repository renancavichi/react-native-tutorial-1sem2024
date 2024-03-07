import {Text, View, StyleSheet} from 'react-native'
import { Image } from 'expo-image'
import H4 from './ui/H4'

const CardUser = ({user}) => {
  return (
    <View style={styles.card}>
        <View style={styles.avatar}>
            <Image
                style={styles.avatarImg}
                source={user.avatar}
            />
        </View>
        <View>
            <H4>{user.name}</H4>
            <Text style={styles.email}>{user.email}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 100,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10
    },
    avatar: {
        marginHorizontal: 10
    },
    avatarImg: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    email: {
        marginTop: 4
    }
})

export default CardUser