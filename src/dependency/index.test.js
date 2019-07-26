import { func } from './index'
import defaultDependency from './defaultDependency'

describe('func', () => {
  it('should return right string', () => {
    expect(func(true, 'hello')).toEqual('olleh')
    expect(func(false, 'hello')).toEqual('hello')
  })

  // it('should work with mock dependency', () => {
  //   jest.mock('./nameDependency', () => ({
  //     nameDependency: input =>
  //       input
  //         .split('')
  //         .reverse()
  //         .join('')
  //   }))
  //   expect(func(false, 'hello')).toEqual('olleh')
  // })

  it('should work with mock dependency', () => {
    jest.mock('./defaultDependency', () => input => input)
    expect(func(false, 'hello')).toEqual('hello')
  })

  // it('should work with mock dependency', () => {
  //   jest.mock('./defaultDependency')
  //   defaultDependency.mockImplementationOnce(input => input + 'test')

  //   expect(func(true, 'hello')).toEqual('hellotest')
  // })
})
