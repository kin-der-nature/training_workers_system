import { useUserStore } from "../../store/user"
import router from '../../router/index.js'

export const logout = () => {
  const userStore = useUserStore();
  userStore.resetToken();
  router.push('/');
}