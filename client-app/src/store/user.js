import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getUserByTokenRequest } from "../api/user";

export const useUserStore = defineStore('user', () => {
  let user = ref(null);

  const token = ref(localStorage.getItem('token'));

  const isAuth = computed(() => !!token.value);

  const setUserState = (v) => {
    user.value = v;
  }

  const setToken = (v) => {
    localStorage.setItem('token', v);
    token.value = v;
  }

  const resetToken = () => {
    localStorage.removeItem('token');
    token.value = null;
  }

  const getByToken = async () => {
    const { data } = await getUserByTokenRequest(token.value);

    user.value = data;
  }

  return {
    user,
    token,
    setUserState,
    resetToken,
    setToken,
    isAuth,
    getByToken,
  }
})