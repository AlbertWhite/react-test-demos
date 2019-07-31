import { call } from 'redux-saga/effects'
import { testGeneratorFunction, testFunction } from './index'

describe('testGeneratorFunction', () => {
  it('should call testFunction', () => {
    // GIVEN
    const gen = testGeneratorFunction()

    // WHEN
    let next = gen.next()
    let effect = call(testFunction, 'test1')

    // THEN
    expect(next.value).toEqual(effect) // .next().value return the value from yield

    // WHEN
    next = gen.next()
    effect = call(testFunction, 'test2')

    // THEN
    expect(next.value).toEqual(effect)

    // WHEN
    next = gen.next()
    effect = call(testFunction, 'test3')

    // THEN
    expect(next.value).toEqual(effect)
  })
})
