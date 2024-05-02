import { create } from 'zustand'

const useUserLoggedStore = create((set) => ({
  id: null,
  nome: '',
  email: '',
  avatar: '',
  token: '',
  isLogged: false,
    
  login: (user, token) => set(() => ({ ...user, token, isLogged: true })),
  logout: () => set(() => ({ 
    id: null,
    nome: '',
    email: '',
    avatar: '',
    token: '',
    isLogged: false,
  }))
}))

export default useUserLoggedStore