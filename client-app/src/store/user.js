import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
  const user = ref(null);

  const token = ref(localStorage.getItem('token'));

  const setUserState = (v) => {
    user.value = v;
  }

  const setToken = (v) => {
    localStorage.setItem('token', v);
    token.value = v;
  }

  return {
    user,
    token,
    setUserState,
    setToken,
  }
})