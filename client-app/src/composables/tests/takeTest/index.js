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

  const allTestCount = computed(() => test.value?.questions.length)

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
    setNextQuestionIndex,
    setQuestionIndex,
    getTestById
  }
}