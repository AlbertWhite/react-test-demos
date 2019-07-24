import { service } from './service'

export const asyncFunction = input => {
  return service(input).then(data => data)
}
