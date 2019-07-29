//https://jestjs.io/docs/en/es6-class-mocks

https: import { func } from './index'
import reverseString from './defaultDependency'
import * as nameDependencies from './nameDependency'

// test default dependency and and dependency import, mock and mockImplementationOnce

jest.mock('./defaultDependency')

nameDependencies.sameString = jest.fn()

describe('func', () => {
  it('should work with mock dependency', () => {
    reverseString.mockImplementationOnce(input => input)
    expect(func(true, 'hello')).toEqual('hello')

    nameDependencies.sameString.mockImplementationOnce(input => input + '2')
    expect(func(false, 'hello')).toEqual('hello2')
  })

  it('should work with mock dependency', () => {
    reverseString.mockImplementationOnce(input => input + '1')
    expect(func(true, 'hello')).toEqual('hello1')

    nameDependencies.sameString.mockImplementationOnce(input => input + '3')
    expect(func(false, 'hello')).toEqual('hello3')
  })
})
