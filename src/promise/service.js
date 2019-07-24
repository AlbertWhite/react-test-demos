export const service = input => {
  return new Promise((resolve, reject) => {
    if (input) {
      resolve('ok')
    } else {
      reject('error')
    }
  })
}
