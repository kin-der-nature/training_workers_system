import { reactive } from "vue"

export const useAuth = () => {

  const authParams = reactive({
    login: null,
    password: null
  })

  return {
    authParams
  }
}