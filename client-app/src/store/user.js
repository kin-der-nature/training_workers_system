import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
  const user = ref(null);

  const setUserState = (v) => {
    user.value = v;
  }

  return {
    user,
    setUserState
  }
})