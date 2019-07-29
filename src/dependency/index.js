import reverseString from './defaultDependency'
import { sameString } from './nameDependency'

export const func = (bool, input) => {
  if (bool) {
    return reverseString(input)
  } else {
    return sameString(input)
  }
}
