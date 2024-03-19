import { reactive } from 'vue';

export const useTakeTest = () => {
  const test = reactive({
    loaging: false,
    value: null
  })


  return {
    test,
  }
}