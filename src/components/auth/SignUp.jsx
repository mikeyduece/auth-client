// Dependencies
import React           from 'react'
import {
  reduxForm,
  Field
}                      from 'redux-form'
import { useDispatch } from 'react-redux'
import { signup }      from '../../actions'

const SignUp = props => {
  const { handleSubmit } = props
  const dispatch = useDispatch()
  const onSubmit = formProps => dispatch(signup(formProps))


  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <fieldset>
        <label>Email</label>
        <Field
          name='email'
          type='text'
          component='input'
          autoComplete='none'
        />
      </fieldset>

      <fieldset>
        <label>Password</label>
        <Field
          name='password'
          type='password'
          component='input'
          autoComplete='none'
        />
      </fieldset>
      <button>Sign Up!</button>
    </form>
  )
}

export default reduxForm({
  form: 'signup'
})(SignUp)