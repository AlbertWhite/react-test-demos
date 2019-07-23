import { call } from 'redux-saga/effects'
export const testFunction = param => {}

// sample generator / redux-saga function
export function* testGeneratorFunction() {
  yield call(testFunction, 'test1')
  yield call(testFunction, 'test2')
  yield call(testFunction, 'test3')
}
