import defaultDependency from './defaultDependency'
import { nameDependency } from './nameDependency'

export const func = (bool, input) => {
  if (bool) {
    return defaultDependency(input)
  } else {
    return nameDependency(input)
  }
}
