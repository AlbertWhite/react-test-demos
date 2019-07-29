import { func } from './index'

// test default dependency and and dependency by import and mock (only once)

jest.mock('./defaultDependency', () => input => input) // mock should in the beginning
jest.mock('./nameDependency', () => ({ sameString: input => input + '1' })) // mock should in the beginning

describe('func', () => {
  it('should work with mock dependency', () => {
    expect(func(true, 'hello')).toEqual('hello')
    expect(func(false, 'hello')).toEqual('hello1')
  })
})
