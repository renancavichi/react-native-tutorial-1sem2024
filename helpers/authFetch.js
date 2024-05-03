import useUserLoggedStore from "../stores/useUserLoggedStore.js"
import AsyncStorage from '@react-native-async-storage/async-storage'

const authFetch = async (url, options) => {
    console.log('Rodou authFetch...')
    const token = useUserLoggedStore.getState().token
    console.log(token)

    allOptions = {
        ...options, 
        headers: {
            ...(options?.headers ? options.headers : {}),
            "Authorization": "Bearer " + token}}
    const response = await fetch(url, allOptions)

    if(!response.ok){
        const data = await response.json()
        if(data?.error && data?.code && data.code === "expired-token"){
            console.log('Token Expirado...')
            const resRefreshToken = await fetch('http://localhost:3333/auth/refresh-token', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            })
            console.log('Rodou o refresh Token...')
            if(!resRefreshToken.ok){
                console.log('Erro ao realizar refresh Token...')
                useUserLoggedStore.setState({ 
                    id: null,
                    nome: '',
                    email: '',
                    avatar: '',
                    token: '',
                    isLogged: false}
                )
                try {
                    await AsyncStorage.removeItem('userLogged')
                } catch (error){
                    console.log(error)
                    alert('Erro ao limpar async storage!')
                }
                console.log('Erro ao realizar refresh Token...')
                return resRefreshToken
            }
            const dataRefreshToken = await resRefreshToken.json()
            console.log(dataRefreshToken)
            useUserLoggedStore.setState({token: dataRefreshToken.newToken})
            console.log('Token atualizado no zustand storage!')
            try {
                await AsyncStorage.setItem('userLogged', JSON.stringify({...dataRefreshToken.user, token: dataRefreshToken.newToken}))
                console.log('Token atualizado no async storage!')
            } catch (error){
                console.log(error)
                alert('Erro ao gravar dados de login no dispositivo!')
            }
            console.log('Rodando recursividade do authFetch!')
            return await authFetch(url, options)
        }
    }  
    return response
}

export default authFetch