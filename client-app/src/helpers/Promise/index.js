export const fakeDelay = (method, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(method())
    }, delay)
  })
}