import { computed, ref, reactive } from 'vue';
import { getTestByIdRequest } from "../../../api/test";


export const useTakeTest = () => {
  const test = reactive({
    loading: false,
    value: null
  })

  const currentQuestionIndex = ref(0);

  const currentQuestion = computed(() => test.value?.questions[currentQuestionIndex.value])

  const getTestById = async (id) => {
    test.loading = true;
    const { data } = await getTestByIdRequest(id)
    test.value = data;
    test.loading = false;
  }

  return {
    test,
    currentQuestionIndex,
    currentQuestion,
    getTestById
  }
}