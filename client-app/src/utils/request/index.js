import { reactive } from "vue"

export const useRequestHanlder = async ({ request, onSuccess, onError }) => {
  const result = reactive({
    data: null,
    response: null,
    isLoading: false,
  })

  result.isLoading = true;
  result.response = request()
}