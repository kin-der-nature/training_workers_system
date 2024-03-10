import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore('user', () => {
  const user = ref(null);

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

  return {
    user,
    token,
    setUserState,
    resetToken,
    setToken,
    isAuth,
  }
})