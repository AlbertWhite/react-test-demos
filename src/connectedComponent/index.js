import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ConnectedComponent } from './connectedComponent'

const store = createStore(() => {})

export const App = () => (
  <Provider store={store}>
    <ConnectedComponent />
  </Provider>
)
