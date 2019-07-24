// https://jestjs.io/docs/en/tutorial-async
import { asyncFunction } from './index'

describe('asyncFunction', () => {
  it('should return ok if input is true', () => {
    // WHEN
    const promise = asyncFunction(true)
    // THEN
    promise.then(d => {
      console.warn('alb', { d })
      expect(d).toEqual('oks')
    })
  })

  it('should return error if input is false', () => {
    // WHEN
    const promise = asyncFunction(false)

    // THEN
    promise.catch(err => {
      expect(err).toEqual('error')
    })
  })
})
