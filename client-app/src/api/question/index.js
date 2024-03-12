import { httpInctance } from ".."

export const getQuestionRequest = () => {
  return httpInctance.get('questions/')
}