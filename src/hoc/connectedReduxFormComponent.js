import React from 'react'
import { reduxForm } from 'redux-form'

export const FormComponent = () => (
  <form>
    <div>123</div>
  </form>
)

export const ConnectedReduxFormComponent = reduxForm({ form: 'test' })(
  FormComponent
)
