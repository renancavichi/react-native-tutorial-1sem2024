import useUserLoggedStore from "../stores/useUserLoggedStore.js"

const authFetch = async (url, options) => {

    const token = useUserLoggedStore(state => state.token)

    allOptions = {
        ...options, 
        headers: {
            ...(options?.headers ? options.headers : {}),
            "Authorization": "Bearer " + token}}
    const response = fetch(url, allOptions)
    // continuar com refresh token se token expirou   
    

}

export default authFetch