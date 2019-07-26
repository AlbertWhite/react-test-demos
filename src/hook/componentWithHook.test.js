// api:  https://testing-library.com/docs/react-testing-library/api

// query api: https://testing-library.com/docs/dom-testing-library/cheatsheet#queries

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ComponentWithHooks } from './componentWithHook'

describe('ComponentWithHooks', () => {
  test('show default text', () => {
    // WHEN
    const { getByText, queryByText } = render(<ComponentWithHooks />)

    // THEN
    expect(getByText('Hello')).toBeInTheDocument()
    expect(queryByText('World')).not.toBeInTheDocument() // query by won't throw https://testing-library.com/docs/dom-testing-library/cheatsheet#queries
  })

  test('show default text', () => {
    // WHEN
    const { queryByTestId } = render(<ComponentWithHooks />)

    // THEN
    expect(queryByTestId('clicked')).not.toBeInTheDocument()

    // WHEN
    fireEvent.click(queryByTestId('button'))

    // THEN
    expect(queryByTestId('clicked')).toBeInTheDocument()
  })
})
