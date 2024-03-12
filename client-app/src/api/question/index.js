import { httpInctance } from ".."

export const getQuestion = () => {
  return httpInctance.get('questions/')
}