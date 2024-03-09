import { reactive } from "vue"
import { useUserStore } from "../../store/user"
import { getTokenByAuthParamsRequest } from "../../api/user"

export const useAuth = () => {

  const userStore = useUserStore();

  const authParams = reactive({
    login: null,
    password: null
  })

  const authByParams = async ({ login, password }) => {
    const { data: { token } } = await getTokenByAuthParamsRequest({ login, password })

    userStore.setToken(token);
  }

  return {
    authParams,
    authByParams
  }
}