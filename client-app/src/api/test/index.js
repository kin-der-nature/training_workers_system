import { data } from "../../data/tests"
import { fakeDelay } from '../../helpers/Promise/index.js'

export const getTestsRequest = (delay) => {
  return fakeDelay(() => {
    return data
  }, delay)
}