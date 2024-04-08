import { reactive } from "vue";
import { getQuestionRequest } from "../../api/question";

export const useQuestions = () => {
  const questions = reactive({
    value: null,
    loading: false
  })

  const getQuestions = async () => {
    questions.loading = true;
    const { data } = await getQuestionRequest();
    questions.value = data;
    questions.loading = false;
  }

  return {
    questions,
    getQuestions
  }
}