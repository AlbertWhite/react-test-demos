import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reduxForm } from 'redux-form'
import {
  FormComponent,
  ConnectedReduxFormComponent
} from './connectedReduxFormComponent'

describe('ConnectedReduxFormComponent', () => {
  it('should have one form', () => {
    // GIVEN
    const store = createStore(() => ({}))

    // WHEN
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedReduxFormComponent />
      </Provider>
    )

    // or
    const ConnectedReduxFormComponent1 = reduxForm({ form: 'test' })(
      FormComponent
    )
    const wrapper1 = mount(
      <Provider store={store}>
        <ConnectedReduxFormComponent1 />
      </Provider>
    )

    // THEN
    expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper1.find('form').length).toEqual(1)
  })
})
