import { httpInctance } from ".."

export const getTestsRequest = () => {
  return httpInctance.get('tests/');
}