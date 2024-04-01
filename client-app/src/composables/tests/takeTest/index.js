import { computed, ref, reactive } from 'vue';
import { getTestByIdRequest } from "../../../api/test";


export const useTakeTest = () => {
  const test = reactive({
    loading: false,
    value: null
  })

  const result = ref([]);

  const currentQuestionIndex = ref(0);

  const selectedVariants = ref([]);

  const currentQuestion = computed(() => test.value?.questions[currentQuestionIndex.value])

  const isSelectedVariants = computed(() => selectedVariants.value.length < 1);

  const currentResponseOfQuestion = computed(() => ({ id: currentQuestion.value.id, responses: selectedVariants.value }))

  const allTestCount = computed(() => test.value?.questions.length)

  const setResponseOfQuestion = (response) => {

    const currentQuestion = result.value.find((item) => item.id === response.id);

    if (currentQuestion) {

      currentQuestion.responses = [ ...selectedVariants.value ];

      return;
    }

    result.value.push(response);
  }

  const setQuestionIndex = (v) => {

    if (currentQuestionIndex.value >= allTestCount.value - 1 && currentQuestionIndex.value > 0) {
      return
    }

    currentQuestionIndex.value = v;
  }


  const setNextQuestionIndex = () => {
    setQuestionIndex(currentQuestionIndex.value + 1)
  }

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
    isSelectedVariants,
    selectedVariants,
    result,
    setResponseOfQuestion,
    setNextQuestionIndex,
    currentResponseOfQuestion,
    setQuestionIndex,
    getTestById
  }
}