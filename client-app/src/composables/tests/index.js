import { reactive } from "vue"
import { getTestsRequest } from "../../api/test";

export const useTests = () => {
  const tests = reactive({
    value: null,
    loading: false
  });

  const setTestsValue = (v) => {
    tests.value = v
  }

  const getTests = async () => {
    tests.loading = true
    const { data } = await getTestsRequest();
    setTestsValue(data);
    tests.loading = false
  }

  return {
    tests,
    setTestsValue,
    getTests
  }
}