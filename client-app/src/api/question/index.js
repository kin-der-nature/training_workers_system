import { httpInctance } from ".."

export const getQuestionRequest = () => {
  return httpInctance.get('questions/')
}

export const createQuestionRequest = (dto) => {
  return httpInctance.post('questions/', dto);
}