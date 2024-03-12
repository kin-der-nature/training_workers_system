import { reactive } from "vue";

export const userQuestions = () => {
  const questions = reactive({
    value: null,
    loading: false
  })

  return {
    questions
  }
}