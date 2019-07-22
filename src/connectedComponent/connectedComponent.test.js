import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Enzyme, { shallow, mount } from 'enzyme'
import ConnectedComponent from './connectedComponent'

describe('ConnectedComponent', () => {
  it('should have one div', () => {
    // GIVEN
    const store = createStore(() => ({}))

    // WHEN
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedComponent />
      </Provider>
    )

    // THEN
    expect(wrapper.find('div').length).toEqual(1)
  })
})
