import { reactive } from "vue"
import { useUserStore } from "../../store/user"
import { getTokenByAuthParamsRequest } from "../../api/user"
import { useRouter } from "vue-router"

export const useAuth = () => {

  const router = useRouter();
  const userStore = useUserStore();

  const authParams = reactive({
    login: null,
    password: null
  })

  const authByParams = async ({ login, password }) => {
    const { data: { token } } = await getTokenByAuthParamsRequest({ login, password })

    userStore.setToken(token);
    router.push('/home');
  }

  return {
    authParams,
    authByParams
  }
}