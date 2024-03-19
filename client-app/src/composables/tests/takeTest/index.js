import { reactive } from 'vue';
import { getTestByIdRequest } from "../../../api/test";


export const useTakeTest = () => {
  const test = reactive({
    loaging: false,
    value: null
  })

  const currentQuestionIndex = ref(0);

  const getTestById = async (id) => {
    test.loaging = true;
    const { data } = await getTestByIdRequest(id)
    test.value = data;
    test.loaging = false;
  }

  return {
    test,
    currentQuestionIndex,
    getTestById
  }
}