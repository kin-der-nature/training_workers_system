import { fakeDelay } from "../../helpers/Promise"
import { data } from "../../data/courses"

export const getCoursesFakeRequest = (delay) => {
  return fakeDelay(() => data, delay)
}