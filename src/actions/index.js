import { AUTH_USER } from './types'
import history       from '../history'
import authServer    from '../apiClients/authServer'

export const signup = (formProps) => dispatch => {
  // const response = await authServer.post('/signup', formProps)

  authServer.post('/signup', formProps)

  // dispatch({ type: AUTH_USER, payload: response.data })
  // history.push('/signin')
}