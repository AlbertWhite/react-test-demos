//https: jestjs.io/docs/en/asynchronous.html
import { service } from './service'

describe('service', () => {
  it('should return ok if input is true: first way', () => {
    const promise = service(true)
    return expect(promise).resolves.toBe('ok')
  })

  it('should return ok if input is true: second way', () => {
    // remember to return the promise in the end
    return service(true).then(data => {
      expect(data).toBe('ok')
    })
  })

  it('should return error if input is false: first way', () => {
    const promise = service(false)
    return expect(promise).rejects.toMatch('error')
  })

  it('should return error if input is false: second way', () => {
    return service(false).catch(error => {
      expect(error).toBe('error')
    })
  })
})
