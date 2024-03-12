import { reactive } from "vue"

export const useTests = () => {
  const tests = reactive({
    value: null,
    loading: false
  });

  const setTestsValue = (v) => {
    tests.value = v
  }

  return {
    tests,
    setTestsValue
  }
}