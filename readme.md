### Test list

#### React Component

- Use Enzyme to test a DOM element or react class exist. DONE
- Test a function is excuted after interaction with DOM. DONE

#### Connected Component / HOC component

- Test a connected component. DONE
- Test a HOC component like reduxForm. DONE

#### Redux-saga

- Test if a saga effect is excuted with good parameters. DONE.

#### Promise

- test promise with mock implementation. DONE.
  https://github.com/AlbertWhite/things/issues/17
  https://github.com/FnacDarty/fnac-authentication/pull/94

#### React hook

https://github.com/testing-library/react-testing-library

#### Jest coverage test

yarn test --coverage

#### Mock dependency

- mock default export
- mock with implementation multiple times
- mock only a named export
- mock a named export multiple times

#### Other

- Mock document element.

- Mock a javascript native object.

```
global.Date  =  class  extends  Date {
		constructor(...args) {
			if (args.length) {
			// if there is argument, keep the old constructor
				return  new  RealDate(...args)
			}
			// if there is no argument, use the new constructor
			return  new  RealDate(date)
		}
	}
```
