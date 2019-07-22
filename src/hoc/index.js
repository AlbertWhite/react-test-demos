import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ConnectedReduxFormComponent } from './connectedReduxFormComponent'

const store = createStore(() => {})

export const App = () => (
  <Provider store={store}>
    <ConnectedReduxFormComponent />
  </Provider>
)
