import { create } from 'zustand'

const useUserLoggedStore = create((set) => ({
  nome: '',
  email: '',
  avatar: '',
  token: '',
  isLogged: false,
    
  login: (nome, email, avatar, token) => set(() => ({ nome, email, avatar, token, isLogged: true })),
  logout: () => set(() => ({ 
    nome: '',
    email: '',
    avatar: '',
    token: '',
    isLogged: false,
  }))
}))

export default useUserStore