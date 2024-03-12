import { reactive } from "vue"

export const useTests = () => {
  const tests = reactive({
    value: null,
    loading: false
  });


  return {
    tests
  }
}